<template>
  <div id="app">
    <h1>Simple color picker</h1>
    <p>
      This is a live demo showing how to use @mikk3lro/mc-colorpicker for
      Vue.js.
    </p>
    <p>
      See
      <a href="https://github.com/Mikk3lRo/vue-colorpicker#readme"
        >github repo</a
      >
      or
      <a href="https://www.npmjs.com/package/@mikk3lro/mc-colorpicker"
        >npm package</a
      >
      for installation instructions.
    </p>

    <div id="toc">
      <h3>TOC</h3>
      <ul>
        <li><a href="#default">Default behaviour</a></li>
        <li><a href="#opacity">With opacity</a></li>
        <li><a href="#position">Popout position</a></li>
        <li><a href="#value-and-format">Value and format</a></li>
        <li><a href="#customizing">Customizing preview</a></li>
        <li><a href="#no-auto-hide">Prevent auto-hide</a></li>
        <li><a href="#show-hide-toggle">Show / hide / toggle</a></li>
        <li><a href="#no-preview-click-handler">Disable preview click</a></li>
        <li><a href="#breakout">Breaking out</a></li>
      </ul>
    </div>

    <h3 id="default">Default behaviour</h3>
    <div class="example">
      <McColorpicker />
    </div>
    <pre>&lt;McColorpicker /></pre>

    <h3 id="opacity">With opacity</h3>
    <p>Include opacity by setting the boolean <code>opacity</code>-prop.</p>
    <div class="example">
      <McColorpicker opacity />
    </div>
    <pre>&lt;McColorpicker opacity /></pre>

    <h3 id="position">Popout position</h3>
    <p>
      Set the position relative to the preview using the
      <code>pop</code>-prop. Possible values are:<br /><code
        >over-left | over | over-right | under-left | under | under-right</code
      >
    </p>
    <p>The default is <code>under-right</code>.</p>
    <ul>
      <li>
        The popout will always show above the preview if there isn't space below
        (and vice-versa)
      </li>
      <li>
        It will move left / right to stay inside the viewport if the chosen
        position would put it outside
      </li>
    </ul>
    <div class="example">
      <McColorpicker pop="over-left" />
      <McColorpicker pop="over" />
      <McColorpicker pop="over-right" />
      <br />
      <McColorpicker opacity pop="under-left" />
      <McColorpicker opacity pop="under" />
      <McColorpicker opacity pop="under-right" />
    </div>
    <pre>
&lt;McColorpicker pop="over-left" />
&lt;McColorpicker pop="over" />
&lt;McColorpicker pop="over-right" />
&lt;McColorpicker pop="under-left" />
&lt;McColorpicker pop="under" />
&lt;McColorpicker pop="under-right" /></pre
    >

    <h3 id="value-and-format">Value and format</h3>
    <p>
      You can set the value using <code>value</code> and the colorpicker will
      emit an <code>input</code> event on changes. This of course means that you
      can also use <code>v-model</code> just like any "normal" input.
    </p>
    <p>
      The colorpicker accepts values in any format understood by
      <a href="https://www.npmjs.com/package/color">color</a>.
    </p>
    <p>By default the colorpicker will use the same format that is set:</p>
    <table class="initial-current">
      <thead>
        <tr>
          <th>
            Initial value
          </th>
          <td></td>
          <td>
            Current value
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <code>#379bff</code>
          </th>
          <td>
            <McColorpicker v-model="colors.hex1" />
          </td>
          <td>
            <code>{{ colors.hex1 }}</code>
          </td>
        </tr>
        <tr>
          <th>
            <code>rgba(255, 255, 255)</code>
          </th>
          <td>
            <McColorpicker v-model="colors.rgb1" />
          </td>
          <td>
            <code>{{ colors.rgb1 }}</code>
          </td>
        </tr>
        <tr>
          <th>
            <code>Color('#379bff')</code>
          </th>
          <td>
            <McColorpicker v-model="colors.obj1" />
          </td>
          <td>
            <pre>color-object: {{ colors.obj1.object() }}</pre>
          </td>
        </tr>
        <tr>
          <th>
            <code>#379bffcc</code>
          </th>
          <td>
            <McColorpicker v-model="colors.hex2" opacity />
          </td>
          <td>
            <code>{{ colors.hex2 }}</code>
          </td>
        </tr>
        <tr>
          <th>
            <code>rgba(255, 255, 255, 0.8)</code>
          </th>
          <td>
            <McColorpicker v-model="colors.rgb2" opacity />
          </td>
          <td>
            <code>{{ colors.rgb2 }}</code>
          </td>
        </tr>
        <tr>
          <th>
            <code>Color('#379bff').fade(0.2)</code>
          </th>
          <td>
            <McColorpicker v-model="colors.obj2" opacity />
          </td>
          <td>
            <pre>color-object: {{ colors.obj2.object() }}</pre>
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      Set the format explicitly using the <code>format</code>-prop. Possible
      values are:<br /><code>hex | rgb | object</code>
    </p>
    <p>Note that:</p>
    <ul>
      <li>
        in rgb-mode
        <ul>
          <li>
            an <code>rgba(...)</code>-string is returned if the opacity is less
            than 1
          </li>
          <li>
            an <code>rgb(...)</code>-string is returned if the opacity is 1
          </li>
        </ul>
      </li>
      <li>
        in hex-mode
        <ul>
          <li>a 6-digit hex code is returned if opacity is disabled</li>
          <li>an 8-digit hex code is returned if opacity is enabled</li>
        </ul>
      </li>
      <li>
        in object-mode the returned object is always a
        <a href="https://www.npmjs.com/package/color">color</a> object.
      </li>
    </ul>

    <h3 id="customizing">Customizing the preview</h3>
    <p>
      Though obviously possible, it is not recommended to override the preview
      styling directly.
    </p>
    <p>Instead replace it with a custom element:</p>
    <div class="example">
      <p>
        Pick a color:
        <McColorpicker v-model="colors.hex3" pop="under-left">
          <div
            class="squarePreview"
            :style="{ backgroundColor: colors.hex3 }"
          />
        </McColorpicker>
      </p>
    </div>
    <p>
      Note that using very large or very small preview-elements may give strange
      results.
    </p>
    <pre>
&lt;McColorpicker v-model="colors.hex3" pop="under-left">
  &lt;div
    class="squarePreview"
    :style="{ backgroundColor: colors.hex3 }"
  />
&lt;/McColorpicker></pre
    >
    <hr />
    <p>
      You can use an <code>&lt;input></code> the same way - allowing for super
      easy copy-paste:
    </p>
    <div class="example">
      <p>
        Pick a color:
        <McColorpicker v-model="colors.hex3" pop="under-left">
          <input
            v-model="colors.hex3"
            class="inputPreview"
            :style="{
              backgroundColor: colors.hex3,
              color: hex3isDark ? '#fff' : '#000',
            }"
          />
        </McColorpicker>
      </p>
    </div>
    <p>
      You probably shouldn't use this example as-is without some sort of input
      validation though.
    </p>
    <pre>
&lt;McColorpicker v-model="colors.hex3" pop="under-left">
  &lt;input
    v-model="colors.hex3"
    class="inputPreview"
    :style="{
      backgroundColor: colors.hex3,
      color: hex3isDark ? '#fff' : '#000',
    }"
  />
&lt;/McColorpicker></pre
    >
    <hr />

    <p>You don't even need to have a colorful preview:</p>
    <div class="example">
      Pick a color:
      <McColorpicker v-model="colors.hex3" pop="under">
        {{ colors.hex3 }}
      </McColorpicker>
    </div>
    <pre>
Pick a color:
&lt;McColorpicker v-model="colors.hex3" pop="under">
  <span>{</span>{ colors.hex3 }}
&lt;/McColorpicker></pre
    >

    <h3 id="no-auto-hide">Prevent auto-hide</h3>
    <p>
      By default the colorpicker will listen for clicks outside and
      automatically hide the popout.
    </p>
    <p>
      When in <a href="#breakout">breakout-mode</a> it will also auto-hide on
      window scroll or resize.
    </p>
    <p>
      You can disable this behaviour with the boolean prop
      <code>no-auto-hide</code>:
    </p>
    <div class="example">
      <McColorpicker no-auto-hide v-model="colors.hex3" />
    </div>
    <pre>&lt;McColorpicker no-auto-hide v-model="colors.hex3" /></pre>

    <h3 id="show-hide-toggle">Show / hide / toggle popout</h3>
    <p>You can show or hide the popout programmatically:</p>
    <div class="example">
      <button @click="$refs['programmatic'].show()">Show popout</button>
      <button @click="$refs['programmatic'].hide()">Hide popout</button>
      <button @click="$refs['programmatic'].toggle()">
        Toggle popout
      </button>

      <McColorpicker no-auto-hide ref="programmatic" v-model="colors.hex3" />
    </div>
    <p>
      <small
        ><strong>Note:</strong> Since by default a click outside the component
        would hide the popout you need to add <code>no-auto-hide</code> to get
        the expected behaviour - or stop the propagation of the click events.
      </small>
    </p>
    <pre>
&lt;button @click="$refs['programmatic'].show()">Show popout&lt;/button>
&lt;button @click="$refs['programmatic'].hide()">Hide popout&lt;/button>
&lt;button @click="$refs['programmatic'].toggle()">Toggle popout&lt;/button>

&lt;McColorpicker no-auto-hide ref="programmatic" v-model="colors.hex3" /></pre
    >

    <h3 id="no-preview-click-handler">Disable popout on preview click</h3>
    <p>
      Disable popout toggling on preview click with
      <code>no-preview-click-handler</code>:
    </p>
    <div class="example">
      <button @click.stop="$refs['noShow'].show()">Show popout</button>

      <McColorpicker
        ref="noShow"
        no-preview-click-handler
        v-model="colors.hex3"
      />
    </div>
    <pre>
&lt;button @click.stop="$refs['noShow'].show()">Show popout&lt;/button>

&lt;McColorpicker
  ref="noShow"
  no-preview-click-handler
  v-model="colors.hex3"
/></pre
    >

    <h3 id="breakout">Breaking out of <code>overflow: hidden</code></h3>
    <p>
      By default the popout element is absolutely positioned inside the same
      outer element that contains the preview.
    </p>
    <p>
      This is simple and works well for most situations... but can be a problem
      when the colorpicker is placed inside a container with overflow hidden or
      scrolling enabled.
    </p>
    <p>
      Setting the <code>breakout</code>-prop will append the popout directly to
      the body element instead, working around the issue.
    </p>
    <p>
      However, it is not recommended unless strictly necessary - because:
    </p>
    <ul>
      <li>
        Vue.js strongly discourages manipulating the DOM directly - which is
        exactly how the problem is handled
      </li>
      <li>
        positioning is less reliable - the popout could "fly away" from the
        preview in certain situations
      </li>
    </ul>
    <div class="example overflow">
      <button @click="breakout = !breakout">
        {{ breakout ? 'Disable ' : 'Enable' }} breakout
      </button>
      <McColorpicker :breakout="breakout" />
    </div>
    <pre>&lt;McColorpicker :breakout="{{ breakout }}" /></pre>
  </div>
</template>

<script>
import McColorpicker from './components/McColorpicker'
import Color from 'color'

export default {
  name: 'App',
  data() {
    return {
      colors: {
        hex1: '#379bff',
        rgb1: 'rgba(55, 155, 255)',
        obj1: Color('#379bff'),
        hex2: '#379bffcc',
        rgb2: 'rgba(55, 155, 255, 0.8)',
        obj2: Color('#379bff').fade(0.2),
        hex3: '#ffc300',
      },
      breakout: false,
    }
  },
  components: {
    McColorpicker,
  },
  computed: {
    hex3isDark() {
      return Color(this.colors.hex3).isDark()
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 1em auto 160px auto;
  max-width: 600px;
  text-align: left;
  padding: 1em 0.5em;
  line-height: 1.6em;
}
* {
  vertical-align: baseline;
  box-sizing: border-box;
}
a {
  color: #379bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
#toc {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 220px;
  top: 40px;
  left: calc(50% - 550px);
  padding: 1em 0;
}
#toc li {
  padding: 0.2em 0.5em;
  margin: 0;
  text-align: center;
}
#toc h3 {
  border-bottom: 1px solid #888;
  margin: 0 0 0.5em 0;
  text-align: center;
}
#toc ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
@media screen and (max-width: 1100px) {
  #app {
    margin-left: 230px;
    max-width: none;
  }
  #toc {
    left: 0;
    top: 0;
    bottom: 0;
    transform: none;
  }
}
@media screen and (max-width: 600px) {
  #app {
    margin-left: auto;
  }
  #toc {
    display: none;
  }
}

h3 {
  margin-top: 50px;
  border-bottom: 3px solid #123456;
}

li {
  margin: 1em 0;
}

.example {
  text-align: center;
  position: relative;
}
.example.overflow {
  overflow: scroll;
  padding: 1em 0;
  border: 1px solid;
}
pre,
code {
  text-align: left;
  background: #eee;
}
table {
  margin: 0 auto;
  vertical-align: top;
  table-layout: fixed;
}
table th,
table td {
  vertical-align: top;
  padding: 0.5em;
  width: 45%;
}
table td:nth-child(2) {
  width: 10%;
  text-align: center;
}
table th {
  text-align: right;
  font-weight: normal;
}
table td {
  text-align: left;
}
table code {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
table pre,
table code {
  margin-top: 3px;
  display: inline-block;
  max-width: 100%;
}
.squarePreview {
  width: 100px;
  height: 2em;
}
.inputPreview {
  border: none;
  padding: 0;
  border-radius: 1em;
  height: 2em;
  text-align: center;
  width: 100px;
}
pre {
  padding: 0.5em;
  overflow-x: auto;
}
.initial-current {
  width: 100%;
}
.initial-current pre {
  width: 100%;
  margin: 0;
}
@media screen and (max-width: 500px) {
  .initial-current thead {
    display: none;
  }
  .initial-current th,
  .initial-current td,
  .initial-current tr {
    width: auto !important;
    display: block;
    text-align: center;
  }
  .initial-current th:first-child::before {
    content: 'Initial: ';
    display: block;
  }
  .initial-current td:last-child::before {
    content: 'Current: ';
    display: block;
  }
  .initial-current td:last-child {
    border-bottom: 1px solid #333;
  }
}
</style>
