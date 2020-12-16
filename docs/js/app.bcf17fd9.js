(function(o){function t(t){for(var r,c,n=t[0],a=t[1],l=t[2],p=0,u=[];p<n.length;p++)c=n[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&u.push(i[c][0]),i[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(o[r]=a[r]);h&&h(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var o,t=0;t<s.length;t++){for(var e=s[t],r=!0,n=1;n<e.length;n++){var a=e[n];0!==i[a]&&(r=!1)}r&&(s.splice(t--,1),o=c(c.s=e[0]))}return o}var r={},i={app:0},s=[];function c(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=o,c.c=r,c.d=function(o,t,e){c.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:e})},c.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},c.t=function(o,t){if(1&t&&(o=c(o)),8&t)return o;if(4&t&&"object"===typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var r in o)c.d(e,r,function(t){return o[t]}.bind(null,r));return e},c.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return c.d(t,"a",t),t},c.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},c.p="/vue-colorpicker/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],a=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var h=a;s.push([0,"chunk-vendors"]),e()})({0:function(o,t,e){o.exports=e("56d7")},"034f":function(o,t,e){"use strict";e("85ec")},"56d7":function(o,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),i=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[o._v("Simple color picker")]),o._m(0),e("h3",[o._v("Default")]),e("div",{staticClass:"example"},[e("McColorpicker")],1),e("pre",[o._v("<McColorpicker />")]),e("h3",[o._v("Opacity")]),o._m(1),e("div",{staticClass:"example"},[e("McColorpicker",{attrs:{opacity:""}})],1),e("pre",[o._v("<McColorpicker opacity />")]),e("h3",[o._v("Popout position")]),o._m(2),e("div",{staticClass:"example"},[e("McColorpicker",{attrs:{pop:"over-left"}}),e("McColorpicker",{attrs:{pop:"over"}}),e("McColorpicker",{attrs:{pop:"over-right"}}),e("br"),e("McColorpicker",{attrs:{opacity:"",pop:"under-left"}}),e("McColorpicker",{attrs:{opacity:"",pop:"under"}}),e("McColorpicker",{attrs:{opacity:"",pop:"under-right"}})],1),e("pre",[o._v('<McColorpicker pop="over-left" />\n<McColorpicker pop="over" />\n<McColorpicker pop="over-right" />\n<McColorpicker pop="under-left" />\n<McColorpicker pop="under" />\n<McColorpicker pop="under-right" />')]),e("h3",[o._v("Value and format")]),o._m(3),o._m(4),e("p",[o._v("By default the colorpicker will use the same format that is set:")]),e("table",[o._m(5),e("tr",[o._m(6),e("td",[e("McColorpicker",{model:{value:o.colors.hex1,callback:function(t){o.$set(o.colors,"hex1",t)},expression:"colors.hex1"}})],1),e("td",[e("code",[o._v(o._s(o.colors.hex1))])])]),e("tr",[o._m(7),e("td",[e("McColorpicker",{model:{value:o.colors.rgb1,callback:function(t){o.$set(o.colors,"rgb1",t)},expression:"colors.rgb1"}})],1),e("td",[e("code",[o._v(o._s(o.colors.rgb1))])])]),e("tr",[o._m(8),e("td",[e("McColorpicker",{model:{value:o.colors.obj1,callback:function(t){o.$set(o.colors,"obj1",t)},expression:"colors.obj1"}})],1),e("td",[e("pre",[o._v("color-object: "+o._s(o.colors.obj1.object()))])])]),e("tr",[o._m(9),e("td",[e("McColorpicker",{attrs:{opacity:""},model:{value:o.colors.hex2,callback:function(t){o.$set(o.colors,"hex2",t)},expression:"colors.hex2"}})],1),e("td",[e("code",[o._v(o._s(o.colors.hex2))])])]),e("tr",[o._m(10),e("td",[e("McColorpicker",{attrs:{opacity:""},model:{value:o.colors.rgb2,callback:function(t){o.$set(o.colors,"rgb2",t)},expression:"colors.rgb2"}})],1),e("td",[e("code",[o._v(o._s(o.colors.rgb2))])])]),e("tr",[o._m(11),e("td",[e("McColorpicker",{attrs:{opacity:""},model:{value:o.colors.obj2,callback:function(t){o.$set(o.colors,"obj2",t)},expression:"colors.obj2"}})],1),e("td",[e("pre",[o._v("color-object: "+o._s(o.colors.obj2.object()))])])])]),o._m(12),e("p",[o._v("Note that:")]),o._m(13),e("h3",[o._v("Customization")]),e("p",[o._v(" Though obviously possible, it is not recommended to override the preview styling directly. ")]),e("p",[o._v("Instead replace it with a custom element:")]),e("div",{staticClass:"example"},[e("p",[o._v(" Pick a color: "),e("McColorpicker",{attrs:{pop:"under-left"},model:{value:o.colors.hex3,callback:function(t){o.$set(o.colors,"hex3",t)},expression:"colors.hex3"}},[e("div",{staticClass:"squarePreview",style:{backgroundColor:o.colors.hex3}})])],1)]),e("pre",[o._v('<McColorpicker v-model="colors.hex3" pop="under-left">\n  <div\n    class="squarePreview"\n    :style="{ backgroundColor: colors.hex3 }"\n  />\n</McColorpicker>')]),e("hr"),o._m(14),e("div",{staticClass:"example"},[e("p",[o._v(" Pick a color: "),e("McColorpicker",{attrs:{pop:"under-left"},model:{value:o.colors.hex3,callback:function(t){o.$set(o.colors,"hex3",t)},expression:"colors.hex3"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:o.colors.hex3,expression:"colors.hex3"}],staticClass:"inputPreview",style:{backgroundColor:o.colors.hex3,color:o.hex3isDark?"#fff":"#000"},domProps:{value:o.colors.hex3},on:{input:function(t){t.target.composing||o.$set(o.colors,"hex3",t.target.value)}}})])],1)]),e("p",[o._v(" You probably shouldn't use this example as-is without some sort of input validation though. ")]),e("pre",[o._v('<McColorpicker v-model="colors.hex3" pop="under-left">\n  <input\n    v-model="colors.hex3"\n    class="inputPreview"\n    :style="{\n      backgroundColor: colors.hex3,\n      color: hex3isDark ? \'#fff\' : \'#000\',\n    }"\n  />\n</McColorpicker>')]),e("hr"),e("p",[o._v("You don't even need to have a colorful preview:")]),e("div",{staticClass:"example"},[o._v(" Pick a color: "),e("McColorpicker",{attrs:{pop:"under"},model:{value:o.colors.hex3,callback:function(t){o.$set(o.colors,"hex3",t)},expression:"colors.hex3"}},[o._v(" "+o._s(o.colors.hex3)+" ")])],1),e("pre",[o._v('Pick a color:\n<McColorpicker v-model="colors.hex3" pop="under">\n  '+o._s(o.colors.hex3)+"\n</McColorpicker>")]),e("hr"),e("p",[o._v(" By default the colorpicker will listen for clicks outside and automatically hide the popout. ")]),o._m(15),e("div",{staticClass:"example"},[e("McColorpicker",{attrs:{"no-auto-hide":""},model:{value:o.colors.hex3,callback:function(t){o.$set(o.colors,"hex3",t)},expression:"colors.hex3"}})],1),e("pre",[o._v('<McColorpicker no-auto-hide v-model="colors.hex3" />')]),e("hr"),e("p",[o._v("You can show or hide the popup programmatically:")]),e("div",{staticClass:"example"},[e("button",{on:{click:function(t){return o.$refs["programmatic"].show()}}},[o._v("Show popout")]),e("button",{on:{click:function(t){return o.$refs["programmatic"].hide()}}},[o._v("Hide popout")]),e("button",{on:{click:function(t){return o.$refs["programmatic"].toggle()}}},[o._v("Toggle popout")]),e("McColorpicker",{ref:"programmatic",attrs:{"no-auto-hide":""},model:{value:o.colors.hex3,callback:function(t){o.$set(o.colors,"hex3",t)},expression:"colors.hex3"}})],1),o._m(16),e("pre",[o._v('<button @click="$refs[\'programmatic\'].show()">Show popout</button>\n<button @click="$refs[\'programmatic\'].hide()">Hide popout</button>\n<button @click="$refs[\'programmatic\'].toggle()">Toggle popout</button>\n<McColorpicker ref="programmatic" no-auto-hide v-model="colors.hex3" />')]),e("hr"),o._m(17),e("div",{staticClass:"example"},[e("button",{on:{click:function(t){return o.$refs["noShow"].show()}}},[o._v("Show popout")]),e("McColorpicker",{ref:"noShow",attrs:{"no-preview-click-handler":""},model:{value:o.colors.hex3,callback:function(t){o.$set(o.colors,"hex3",t)},expression:"colors.hex3"}})],1),e("pre",[o._v('<button @click="$refs[\'noShow\'].show()">Show popout</button>\n<McColorpicker\n  ref="noShow"\n  no-preview-click-handler\n  v-model="colors.hex3"\n/>')])])},s=[function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",[o._v(" This is a live demo showing how to use "),e("a",{attrs:{href:"https://github.com/Mikk3lRo/vue-colorpicker#readme"}},[o._v("@mikk3lro/mc-colorpicker")]),o._v(" colorpicker for Vue.js. ")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",[o._v("Include opacity by setting the boolean "),e("code",[o._v("opacity")]),o._v("-prop.")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",[o._v(" Set the position using the "),e("code",[o._v("pop")]),o._v("-prop. Possible values are:"),e("br"),e("code",[o._v("over-left | over | over-right | under-left | under | under-right")])])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",[o._v(" You can set the value using "),e("code",[o._v("value")]),o._v(" and the colorpicker will emit an "),e("code",[o._v("input")]),o._v(" event on changes. This of course means that you can also use "),e("code",[o._v("v-model")]),o._v(' just like any "normal" input. ')])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",[o._v(" The colorpicker accepts values in any format understood by "),e("a",{attrs:{href:"https://www.npmjs.com/package/color"}},[o._v("color")]),o._v(". ")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("tr",[e("th",[o._v(" Initial value ")]),e("td"),e("td",[o._v(" Current value ")])])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("th",[e("code",[o._v("#379bff")])])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("th",[e("code",[o._v("rgba(255, 255, 255)")])])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("th",[e("code",[o._v("Color('#379bff')")])])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("th",[e("code",[o._v("#379bffcc")])])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("th",[e("code",[o._v("rgba(255, 255, 255, 0.8)")])])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("th",[e("code",[o._v("Color('#379bff').fade(0.2)")])])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",[o._v(" Set the format explicitly using the "),e("code",[o._v("format")]),o._v("-prop. Possible values are:"),e("br"),e("code",[o._v("hex | rgb | object")])])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("ul",[e("li",[o._v(" in rgb-mode "),e("ul",[e("li",[o._v(" an "),e("code",[o._v("rgba(...)")]),o._v("-string is returned if the opacity is less than 1 ")]),e("li",[o._v(" an "),e("code",[o._v("rgb(...)")]),o._v("-string is returned if the opacity is 1 ")])])]),e("li",[o._v(" in hex-mode "),e("ul",[e("li",[o._v("a 6-digit hex code is returned if opacity is disabled")]),e("li",[o._v("an 8-digit hex code is returned if opacity is enabled")])])]),e("li",[o._v(" in object-mode the returned object is always a "),e("a",{attrs:{href:"https://www.npmjs.com/package/color"}},[o._v("color")]),o._v(" object. ")])])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",[o._v(" You can use an "),e("code",[o._v("<input>")]),o._v(" the same way - allowing for super easy copy-paste: ")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",[o._v(" You can disable this behaviour with the boolean prop "),e("code",[o._v("no-auto-hide")]),o._v(": ")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",[o._v(" Since by default a click outside the component would hide the popout you need to add "),e("code",[o._v("no-auto-hide")]),o._v(" to get the expected behaviour from "),e("code",[o._v("toggle()")])])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",[o._v(" Disable popout show / hide on preview click with "),e("code",[o._v("no-preview-click-handler")]),o._v(": ")])}],c=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{ref:"outer",class:o.outerClasses},[e("span",{ref:"activator",staticClass:"mccolorpicker__activator",on:{click:function(t){!o.noPreviewClickHandler&&o.toggle()}}},[o._t("default",[e("span",{staticClass:"mccolorpicker__preview",style:o.previewStyle})])],2),e("div",{ref:"popout",staticClass:"mccolorpicker__popout"},[e("div",{ref:"arrow",staticClass:"mccolorpicker__arrow"}),e("div",{staticClass:"mccolorpicker__dragarea mccolorpicker__hue"},[e("span",{staticClass:"mccolorpicker__ymarker",style:o.stripMarkerStyle}),e("canvas",{ref:"hue-slider",attrs:{height:"150",width:"30"}})]),e("div",{staticClass:"mccolorpicker__dragarea"},[e("span",{staticClass:"mccolorpicker__xymarker",style:o.colorMarkerStyle}),e("canvas",{ref:"color-block",attrs:{height:"150",width:"150"}})]),e("div",{staticClass:"mccolorpicker__dragarea mccolorpicker__checkered mccolorpicker__opacity",style:o.opacity?"":"display:none"},[e("span",{staticClass:"mccolorpicker__ymarker",style:o.opacityMarkerStyle}),e("canvas",{ref:"opacity-slider",attrs:{height:"150",width:"30"}})])])])},n=[],a=(e("cb29"),e("caad"),e("d3b7"),e("ac1f"),e("25f0"),e("466d"),e("6929")),l=e.n(a),h={props:{value:{type:[String,Object],default:"#12345678"},opacity:{type:Boolean,default:!1},format:{type:String,default:"auto"},pop:{type:String,default:"under-right"},noPreviewClickHandler:{type:Boolean,default:!1},noAutoHide:{type:Boolean,default:!1}},data:function(){return{drag:{which:!1,start:{x:0,y:0},elmStart:{x:0,y:0},max:{x:0,y:0}},dimensions:{hue:{x:30,y:150},color:{x:150,y:150},opacity:{x:30,y:150}},positions:{hue:{x:0,y:0},color:{x:0,y:0},opacity:{x:0,y:0}},ctxs:{hue:null,color:null,opacity:null},shown:!1,preventEmit:!1,colorObj:l()(this.color)}},watch:{value:function(o){this.drag.which||(this.preventEmit=!0,this.parseColor(),this.preventEmit=!1)}},computed:{outerClasses:function(){var o=["mccolorpicker","mccolorpicker__pop-"+this.pop,this.opacity?"mccolorpicker__with_opacity":"mccolorpicker__without_opacity"];return this.shown&&o.push("mccolorpicker__active"),o},colorMarkerStyle:function(){return{left:this.positions.color.x+"px",top:this.positions.color.y+"px"}},stripMarkerStyle:function(){return{top:this.positions.hue.y+"px"}},opacityMarkerStyle:function(){return{top:this.positions.opacity.y+"px"}},previewStyle:function(){var o=this.colorObj.rgb().string();return{backgroundColor:o}}},mounted:function(){this.init(),this.parseColor()},methods:{show:function(){var o={w:this.$refs["popout"].clientWidth,h:this.$refs["popout"].clientHeight},t={w:this.$refs["activator"].clientWidth,h:this.$refs["activator"].clientHeight};"under-left"==this.pop||"over-left"==this.pop?this.$refs["arrow"].style.left=o.w-t.w/2+"px":"under"==this.pop||"over"==this.pop?this.$refs["arrow"].style.left=o.w/2+"px":"under-right"!=this.pop&&"over-right"!=this.pop||(this.$refs["arrow"].style.left=t.w/2+"px");var e={x:0,y:0};["under","under-left","under-right"].includes(this.pop)?e.y=-7-t.h/2:e.y=o.h+7+t.h/2,["under-left","over-left"].includes(this.pop)?e.x=o.w-t.w/2:["under-right","over-right"].includes(this.pop)?e.x=t.w/2:e.x=o.w/2,this.$refs["popout"].style.transformOrigin=e.x+"px "+e.y+"px",this.shown=!0},hide:function(){this.shown=!1},toggle:function(){this.shown?this.hide():this.show()},parseColor:function(){this.colorObj=l()(this.value).hsv();var o=this.colorObj.object();this.positions.hue={x:1,y:o.h/360*(this.dimensions.hue.y-1)};var t={x:o.s/100*(this.dimensions.color.x-1),y:(1-o.v/100)*(this.dimensions.color.y-1)};this.positions.color={x:Math.min(Math.max(t.x,0),this.dimensions.color.x-1),y:Math.min(Math.max(t.y,0),this.dimensions.color.y-1)};var e={x:0,y:0};this.opacity&&(e.y=(1-this.colorObj.alpha())*(this.dimensions.opacity.y-1),e.y=Math.min(Math.max(e.y,0),this.dimensions.opacity.y-1)),this.positions.opacity=e,this.changeHue(this.positions.hue)},init:function(){this.ctxs={color:this.$refs["color-block"].getContext("2d"),hue:this.$refs["hue-slider"].getContext("2d"),opacity:this.$refs["opacity-slider"].getContext("2d")},this.$refs["color-block"].addEventListener("mousedown",this.mousedownColor,!1),this.$refs["hue-slider"].addEventListener("mousedown",this.mousedownHue,!1),this.$refs["opacity-slider"].addEventListener("mousedown",this.mousedownOpacity,!1),document.addEventListener("mouseup",this.mouseup,!1),document.addEventListener("mousemove",this.mousemove,!1),this.fillHue()},fillHue:function(){this.ctxs.hue.rect(0,0,this.dimensions.hue.x,this.dimensions.hue.y);var o=this.ctxs.hue.createLinearGradient(0,0,0,this.dimensions.hue.y);o.addColorStop(0,"rgba(255, 0, 0, 1)"),o.addColorStop(.17,"rgba(255, 255, 0, 1)"),o.addColorStop(.34,"rgba(0, 255, 0, 1)"),o.addColorStop(.51,"rgba(0, 255, 255, 1)"),o.addColorStop(.68,"rgba(0, 0, 255, 1)"),o.addColorStop(.85,"rgba(255, 0, 255, 1)"),o.addColorStop(1,"rgba(255, 0, 0, 1)"),this.ctxs.hue.fillStyle=o,this.ctxs.hue.fill()},fillGradient:function(){var o=this.colorObj.lightness(255).saturationv(255).alpha(1).rgb();this.ctxs.color.fillStyle=o.string(),this.ctxs.color.fillRect(0,0,this.dimensions.color.x,this.dimensions.color.y);var t=this.ctxs.hue.createLinearGradient(0,0,this.dimensions.color.x,0);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),this.ctxs.color.fillStyle=t,this.ctxs.color.fillRect(0,0,this.dimensions.color.x,this.dimensions.color.y);var e=this.ctxs.hue.createLinearGradient(0,0,0,this.dimensions.color.y);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,1)"),this.ctxs.color.fillStyle=e,this.ctxs.color.fillRect(0,0,this.dimensions.color.x,this.dimensions.color.y),this.ctxs.opacity.clearRect(0,0,this.dimensions.opacity.x,this.dimensions.opacity.y),this.ctxs.opacity.rect(0,0,this.dimensions.opacity.x,this.dimensions.opacity.y);var r=this.ctxs.opacity.createLinearGradient(0,0,0,this.dimensions.opacity.y);r.addColorStop(.05,o.string()),r.addColorStop(.95,o.alpha(0).string()),this.ctxs.opacity.fillStyle=r,this.ctxs.opacity.fill()},mousemove:function(o){if("hue"==this.drag.which){var t=this.getDragPosition(o);this.changeHue(t)}if("color"==this.drag.which){var e=this.getDragPosition(o);this.changeColor(e)}if("opacity"==this.drag.which){var r=this.getDragPosition(o);this.changeOpacity(r)}},mouseup:function(o){this.drag.which?this.drag.which=!1:this.$refs["popout"]&&this.$refs["popout"].contains(o.target)||this.noAutoHide||(this.shown=!1)},startDrag:function(o,t){return this.drag.start={x:o.pageX,y:o.pageY},this.drag.elmStart={x:o.offsetX,y:o.offsetY},this.drag.max=this.dimensions[t],this.drag.which=t,this.getDragPosition(o)},getDragPosition:function(o){var t={x:o.pageX-this.drag.start.x+this.drag.elmStart.x,y:o.pageY-this.drag.start.y+this.drag.elmStart.y};return t.x=Math.min(Math.max(t.x,0),this.drag.max.x-1),t.y=Math.min(Math.max(t.y,0),this.drag.max.y-1),t},mousedownHue:function(o){var t=this.startDrag(o,"hue");this.changeHue(t)},mousedownOpacity:function(o){var t=this.startDrag(o,"opacity");this.changeOpacity(t)},mousedownColor:function(o){var t=this.startDrag(o,"color");this.changeColor(t)},changeHue:function(o){this.positions.hue=o,this.colorObj=this.colorObj.hue(360*o.y/(this.dimensions.hue.y-1)),this.fillGradient(),this.changeColor(this.positions.color)},changeColor:function(o){this.positions.color=o;var t=1-o.y/(this.dimensions.color.y-1),e=o.x/(this.dimensions.color.x-1);this.colorObj=this.colorObj.value(100*t),this.colorObj=this.colorObj.saturationv(100*e),this.changeOpacity(this.positions.opacity)},changeOpacity:function(o){this.positions.opacity=o,this.colorObj=this.colorObj.alpha(1-o.y/(this.dimensions.opacity.y-1)),this.updateColorAndOpacity()},outputValue:function(){var o=this.format;if("auto"==o&&"string"===typeof this.value&&(this.value.match(/^#[0-9a-fA-F]+$/)?o="hex":this.value.match(/^rgb/)&&(o="rgb")),"hex"==o){var t=this.colorObj.rgb().hex();return this.opacity&&(t+=("0"+parseInt(255*this.colorObj.alpha()).toString(16)).substr(-2)),t.toLowerCase()}return"rgb"==o?this.colorObj.rgb().string():this.colorObj.rgb()},updateColorAndOpacity:function(){this.preventEmit||this.$emit("input",this.outputValue())}}},p=h,u=(e("8328"),e("2877")),d=Object(u["a"])(p,c,n,!1,null,null,null),v=d.exports,f={name:"App",data:function(){return{colors:{hex1:"#379bff",rgb1:"rgba(55, 155, 255)",obj1:l()("#379bff"),hex2:"#379bffcc",rgb2:"rgba(55, 155, 255, 0.8)",obj2:l()("#379bff").fade(.2),hex3:"#ffc300"}}},components:{McColorpicker:v},computed:{hex3isDark:function(){return l()(this.colors.hex3).isDark()}}},m=f,_=(e("034f"),Object(u["a"])(m,i,s,!1,null,null,null)),y=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(o){return o(y)}}).$mount("#app")},8328:function(o,t,e){"use strict";e("cf5a")},"85ec":function(o,t,e){},cf5a:function(o,t,e){}});
//# sourceMappingURL=app.bcf17fd9.js.map