<template>
  <div ref="outer" :class="outerClasses">
    <span
      ref="activator"
      class="mccolorpicker__activator"
      @click="noPreviewClickHandler ? null : toggle()"
    >
      <slot>
        <span class="mccolorpicker__preview" :style="previewStyle" />
      </slot>
    </span>
    <div ref="popout" class="mccolorpicker__popout">
      <div ref="arrow" class="mccolorpicker__arrow"></div>
      <div class="mccolorpicker__dragarea mccolorpicker__hue">
        <span :style="stripMarkerStyle" class="mccolorpicker__ymarker"></span>
        <canvas ref="hue-slider" height="150" width="30"></canvas>
      </div>
      <div class="mccolorpicker__dragarea">
        <span :style="colorMarkerStyle" class="mccolorpicker__xymarker"></span>
        <canvas ref="color-block" height="150" width="150"></canvas>
      </div>
      <div
        class="mccolorpicker__dragarea mccolorpicker__checkered mccolorpicker__opacity"
        :style="opacity ? '' : 'display:none'"
      >
        <span :style="opacityMarkerStyle" class="mccolorpicker__ymarker"></span>
        <canvas ref="opacity-slider" height="150" width="30"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Color from 'color'

export default {
  props: {
    value: {
      type: [String, Object],
      default: '#12345678',
    },
    opacity: {
      type: Boolean,
      default: false,
    },
    format: {
      type: String,
      default: 'auto',
    },
    pop: {
      type: String,
      default: 'under-right',
    },
    noPreviewClickHandler: {
      type: Boolean,
      default: false,
    },
    noAutoHide: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      drag: {
        which: false,
        start: { x: 0, y: 0 },
        elmStart: { x: 0, y: 0 },
        max: { x: 0, y: 0 },
      },
      dimensions: {
        hue: { x: 30, y: 150 },
        color: { x: 150, y: 150 },
        opacity: { x: 30, y: 150 },
      },
      positions: {
        hue: { x: 0, y: 0 },
        color: { x: 0, y: 0 },
        opacity: { x: 0, y: 0 },
      },
      ctxs: {
        hue: null,
        color: null,
        opacity: null,
      },

      shown: false,

      preventEmit: false,

      colorObj: Color(this.color),
    }
  },
  watch: {
    value(newColor) {
      if (this.drag.which) {
        return
      }
      this.preventEmit = true
      this.parseColor()
      this.preventEmit = false
    },
  },
  computed: {
    outerClasses() {
      let ret = [
        'mccolorpicker', //
        'mccolorpicker__pop-' + this.pop,
        this.opacity
          ? 'mccolorpicker__with_opacity'
          : 'mccolorpicker__without_opacity',
      ]
      if (this.shown) {
        ret.push('mccolorpicker__active')
      }
      return ret
    },
    colorMarkerStyle() {
      return {
        left: this.positions.color.x + 'px',
        top: this.positions.color.y + 'px',
      }
    },
    stripMarkerStyle() {
      return {
        top: this.positions.hue.y + 'px',
      }
    },
    opacityMarkerStyle() {
      return {
        top: this.positions.opacity.y + 'px',
      }
    },
    previewStyle() {
      let colorStr = this.colorObj.rgb().string()
      return {
        backgroundColor: colorStr,
      }
    },
  },
  mounted() {
    this.init()
    this.parseColor()
  },
  methods: {
    show() {
      let pop = {
        w: this.$refs['popout'].clientWidth,
        h: this.$refs['popout'].clientHeight,
      }
      let act = {
        w: this.$refs['activator'].clientWidth,
        h: this.$refs['activator'].clientHeight,
      }
      if (this.pop == 'under-left' || this.pop == 'over-left') {
        this.$refs['arrow'].style.left = pop.w - act.w / 2 + 'px'
      } else if (this.pop == 'under' || this.pop == 'over') {
        this.$refs['arrow'].style.left = pop.w / 2 + 'px'
      } else if (this.pop == 'under-right' || this.pop == 'over-right') {
        this.$refs['arrow'].style.left = act.w / 2 + 'px'
      }
      let to = {
        x: 0,
        y: 0,
      }
      if (['under', 'under-left', 'under-right'].includes(this.pop)) {
        to.y = -7 - act.h / 2
      } else {
        to.y = pop.h + 7 + act.h / 2
      }
      if (['under-left', 'over-left'].includes(this.pop)) {
        to.x = pop.w - act.w / 2
      } else if (['under-right', 'over-right'].includes(this.pop)) {
        to.x = act.w / 2
      } else {
        to.x = pop.w / 2
      }

      this.$refs['popout'].style.transformOrigin = to.x + 'px ' + to.y + 'px'

      this.shown = true
    },
    hide() {
      this.shown = false
    },
    toggle() {
      if (this.shown) {
        this.hide()
      } else {
        this.show()
      }
    },
    parseColor() {
      this.colorObj = Color(this.value).hsv()
      let hsv = this.colorObj.object()

      this.positions.hue = {
        x: 1,
        y: (hsv.h / 360) * (this.dimensions.hue.y - 1),
      }

      let c = {
        x: (hsv.s / 100) * (this.dimensions.color.x - 1),
        y: (1 - hsv.v / 100) * (this.dimensions.color.y - 1),
      }

      this.positions.color = {
        x: Math.min(Math.max(c.x, 0), this.dimensions.color.x - 1),
        y: Math.min(Math.max(c.y, 0), this.dimensions.color.y - 1),
      }

      let o = { x: 0, y: 0 }
      if (this.opacity) {
        o.y = (1 - this.colorObj.alpha()) * (this.dimensions.opacity.y - 1)
        o.y = Math.min(Math.max(o.y, 0), this.dimensions.opacity.y - 1)
      }
      this.positions.opacity = o

      this.changeHue(this.positions.hue)
    },
    init() {
      this.ctxs = {
        color: this.$refs['color-block'].getContext('2d'),
        hue: this.$refs['hue-slider'].getContext('2d'),
        opacity: this.$refs['opacity-slider'].getContext('2d'),
      }

      this.$refs['color-block'].addEventListener(
        'mousedown',
        this.mousedownColor,
        false,
      )
      this.$refs['hue-slider'].addEventListener(
        'mousedown',
        this.mousedownHue,
        false,
      )
      this.$refs['opacity-slider'].addEventListener(
        'mousedown',
        this.mousedownOpacity,
        false,
      )

      document.addEventListener('mouseup', this.mouseup, false)
      document.addEventListener('mousemove', this.mousemove, false)

      this.fillHue()
    },

    fillHue() {
      this.ctxs.hue.rect(0, 0, this.dimensions.hue.x, this.dimensions.hue.y)
      var gradient = this.ctxs.hue.createLinearGradient(
        0,
        0,
        0,
        this.dimensions.hue.y,
      )
      gradient.addColorStop(0, 'rgba(255, 0, 0, 1)')
      gradient.addColorStop(0.17, 'rgba(255, 255, 0, 1)')
      gradient.addColorStop(0.34, 'rgba(0, 255, 0, 1)')
      gradient.addColorStop(0.51, 'rgba(0, 255, 255, 1)')
      gradient.addColorStop(0.68, 'rgba(0, 0, 255, 1)')
      gradient.addColorStop(0.85, 'rgba(255, 0, 255, 1)')
      gradient.addColorStop(1, 'rgba(255, 0, 0, 1)')
      this.ctxs.hue.fillStyle = gradient
      this.ctxs.hue.fill()
    },

    fillGradient() {
      let rgb = this.colorObj
        .lightness(255)
        .saturationv(255)
        .alpha(1)
        .rgb()
      this.ctxs.color.fillStyle = rgb.string()
      this.ctxs.color.fillRect(
        0,
        0,
        this.dimensions.color.x,
        this.dimensions.color.y,
      )
      var grdWhite = this.ctxs.hue.createLinearGradient(
        0,
        0,
        this.dimensions.color.x,
        0,
      )
      grdWhite.addColorStop(0, 'rgba(255,255,255,1)')
      grdWhite.addColorStop(1, 'rgba(255,255,255,0)')
      this.ctxs.color.fillStyle = grdWhite
      this.ctxs.color.fillRect(
        0,
        0,
        this.dimensions.color.x,
        this.dimensions.color.y,
      )

      var grdBlack = this.ctxs.hue.createLinearGradient(
        0,
        0,
        0,
        this.dimensions.color.y,
      )
      grdBlack.addColorStop(0, 'rgba(0,0,0,0)')
      grdBlack.addColorStop(1, 'rgba(0,0,0,1)')
      this.ctxs.color.fillStyle = grdBlack
      this.ctxs.color.fillRect(
        0,
        0,
        this.dimensions.color.x,
        this.dimensions.color.y,
      )

      this.ctxs.opacity.clearRect(
        0,
        0,
        this.dimensions.opacity.x,
        this.dimensions.opacity.y,
      )
      this.ctxs.opacity.rect(
        0,
        0,
        this.dimensions.opacity.x,
        this.dimensions.opacity.y,
      )
      var grd1 = this.ctxs.opacity.createLinearGradient(
        0,
        0,
        0,
        this.dimensions.opacity.y,
      )
      grd1.addColorStop(0.05, rgb.string())
      grd1.addColorStop(0.95, rgb.alpha(0).string())
      this.ctxs.opacity.fillStyle = grd1
      this.ctxs.opacity.fill()
    },

    mousemove(e) {
      if (this.drag.which == 'hue') {
        let rel = this.getDragPosition(e)
        this.changeHue(rel)
      }
      if (this.drag.which == 'color') {
        let rel = this.getDragPosition(e)
        this.changeColor(rel)
      }
      if (this.drag.which == 'opacity') {
        let rel = this.getDragPosition(e)
        this.changeOpacity(rel)
      }
    },
    mouseup(e) {
      if (this.drag.which) {
        this.drag.which = false
      } else if (
        !this.$refs['popout'] ||
        !this.$refs['popout'].contains(e.target)
      ) {
        if (!this.noAutoHide) {
          this.shown = false
        }
      }
    },

    startDrag(e, which) {
      this.drag.start = {
        x: e.pageX,
        y: e.pageY,
      }
      this.drag.elmStart = {
        x: e.offsetX,
        y: e.offsetY,
      }
      this.drag.max = this.dimensions[which]
      this.drag.which = which
      return this.getDragPosition(e)
    },

    getDragPosition(e) {
      let rel = {
        x: e.pageX - this.drag.start.x + this.drag.elmStart.x,
        y: e.pageY - this.drag.start.y + this.drag.elmStart.y,
      }
      rel.x = Math.min(Math.max(rel.x, 0), this.drag.max.x - 1)
      rel.y = Math.min(Math.max(rel.y, 0), this.drag.max.y - 1)
      return rel
    },

    mousedownHue(e) {
      let rel = this.startDrag(e, 'hue')
      this.changeHue(rel)
    },
    mousedownOpacity(e) {
      let rel = this.startDrag(e, 'opacity')
      this.changeOpacity(rel)
    },
    mousedownColor(e) {
      let rel = this.startDrag(e, 'color')
      this.changeColor(rel)
    },

    changeHue(rel) {
      this.positions.hue = rel
      this.colorObj = this.colorObj.hue(
        (rel.y * 360) / (this.dimensions.hue.y - 1),
      )
      this.fillGradient()
      this.changeColor(this.positions.color)
    },
    changeColor(rel) {
      this.positions.color = rel

      let v = 1 - rel.y / (this.dimensions.color.y - 1)
      let s = rel.x / (this.dimensions.color.x - 1)
      this.colorObj = this.colorObj.value(v * 100)
      this.colorObj = this.colorObj.saturationv(s * 100)

      this.changeOpacity(this.positions.opacity)
    },
    changeOpacity(rel) {
      this.positions.opacity = rel
      this.colorObj = this.colorObj.alpha(
        1 - rel.y / (this.dimensions.opacity.y - 1),
      )
      this.updateColorAndOpacity()
    },
    outputValue() {
      let format = this.format
      if (format == 'auto') {
        if (typeof this.value === 'string') {
          if (this.value.match(/^#[0-9a-fA-F]+$/)) {
            format = 'hex'
          } else if (this.value.match(/^rgb/)) {
            format = 'rgb'
          }
        }
      }
      if (format == 'hex') {
        let ret = this.colorObj.rgb().hex()
        if (this.opacity) {
          ret += (
            '0' + parseInt(255 * this.colorObj.alpha()).toString(16)
          ).substr(-2)
        }
        return ret.toLowerCase()
      } else if (format == 'rgb') {
        return this.colorObj.rgb().string()
      }
      return this.colorObj.rgb()
    },

    updateColorAndOpacity() {
      if (this.preventEmit) {
        return
      }
      this.$emit('input', this.outputValue())
    },
  },
}
</script>

<style>
.mccolorpicker {
  position: relative;
  display: inline-block;
}
.mccolorpicker * {
  vertical-align: middle;
}
.mccolorpicker__activator {
  display: inline-block;
}
.mccolorpicker__preview {
  display: block;
  width: 30px;
  height: 30px;
  margin: 0;
  border: 0;
  text-align: center;
  border-radius: 100%;
  overflow: hidden;
  position: relative;
}
.mccolorpicker__popout {
  z-index: 9;
  position: absolute;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  border: solid 1px #ccc;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.001);
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
  border-radius: 3px;
}
.mccolorpicker__arrow {
  border: 1px solid #ccc;
  background: #fff;
  border-right: 0;
  border-bottom: 0;
  width: 8px;
  height: 8px;
  position: absolute;
}
.mccolorpicker__active .mccolorpicker__popout {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}
.mccolorpicker__popout canvas {
  display: block;
  cursor: crosshair;
}
.mccolorpicker__preview::after,
.mccolorpicker__preview::before {
  content: '';
  position: absolute;
  z-index: 0;
}
.mccolorpicker__preview::before {
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
}
.mccolorpicker__preview::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.mccolorpicker__preview::after {
  background-color: inherit;
}

.mccolorpicker__preview::before,
.mccolorpicker__checkered {
  background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none"  viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="5" height="5" fill="grey" /><rect x="5" y="5" width="5" height="5" fill="grey" /><rect x="5" y="0" width="5" height="5" fill="white" /><rect x="0" y="5" width="5" height="5" fill="white" /></svg>');
  background-size: 10px 10px;
}

.mccolorpicker__dragarea {
  overflow: hidden;
  float: left;
  position: relative;
  margin: 5px;
}
.mccolorpicker__hue {
  margin-right: 0;
}
.mccolorpicker__opacity {
  margin-left: 0;
}
.mccolorpicker__dragarea span {
  mix-blend-mode: difference;
  pointer-events: none;
  position: absolute;
  width: 6px;
  height: 6px;
  border: 1px solid #fff;
  border-radius: 6px;
}
.mccolorpicker__dragarea span.mccolorpicker__xymarker {
  transform: translate(-3px, -3px);
}
.mccolorpicker__dragarea span.mccolorpicker__ymarker {
  transform: translate(0, -3px);
  left: 0;
  width: 100%;
}

.mccolorpicker__pop-under-right .mccolorpicker__popout {
  top: 100%;
  margin-top: 7px;
  left: 0;
}
.mccolorpicker__pop-under-right .mccolorpicker__arrow {
  top: 0;
  transform: rotate(45deg) translate(-7px, 0px);
}

.mccolorpicker__pop-under .mccolorpicker__popout {
  top: 100%;
  margin-top: 7px;
  left: 50%;
  transform: translateX(-50%) scale(0.001);
}
.mccolorpicker__pop-under .mccolorpicker__arrow {
  top: 0;
  transform: rotate(45deg) translate(-7px, 0px);
}
.mccolorpicker__active.mccolorpicker__pop-under .mccolorpicker__popout {
  transform: translateX(-50%) scale(1);
}

.mccolorpicker__pop-under-left .mccolorpicker__popout {
  top: 100%;
  margin-top: 7px;
  right: 0;
}
.mccolorpicker__pop-under-left .mccolorpicker__arrow {
  top: 0;
  transform: rotate(45deg) translate(-7px, 0px);
}

.mccolorpicker__pop-over-right .mccolorpicker__popout {
  bottom: 100%;
  margin-bottom: 7px;
  left: 0;
}
.mccolorpicker__pop-over-right .mccolorpicker__arrow {
  bottom: 0;
  transform: rotate(225deg) translate(0px, -7px);
}

.mccolorpicker__pop-over .mccolorpicker__popout {
  bottom: 100%;
  margin-bottom: 7px;
  left: 50%;
  transform: translateX(-50%) scale(0.001);
}
.mccolorpicker__pop-over .mccolorpicker__arrow {
  bottom: 0;
  transform: rotate(225deg) translate(0px, -7px);
}
.mccolorpicker__active.mccolorpicker__pop-over .mccolorpicker__popout {
  transform: translateX(-50%) scale(1);
}

.mccolorpicker__pop-over-left .mccolorpicker__popout {
  bottom: 100%;
  margin-bottom: 7px;
  right: 0;
}
.mccolorpicker__pop-over-left .mccolorpicker__arrow {
  bottom: 0;
  transform: rotate(225deg) translate(0px, -7px);
}
</style>
