<template>
  <div id="app">
    <h3>Default</h3>
    <div class="example">
      <McColorpicker />
    </div>
    <pre>&lt;McColorpicker /></pre>

    <h3>Opacity</h3>
    <p>Include opacity by setting the boolean <code>opacity</code>-prop.</p>
    <div class="example">
      <McColorpicker opacity />
    </div>
    <pre>&lt;McColorpicker opacity /></pre>

    <h3>Popout position</h3>
    <p>
      Set the position using the <code>pop</code>-prop. Possible values are:<br /><code
        >over-left | over | over-right | under-left | under | under-right</code
      >
    </p>
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

    <h3>Value and format</h3>
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
    <table>
      <tr>
        <th>
          Initial value
        </th>
        <td></td>
        <td>
          Current value
        </td>
      </tr>
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

    <h3>Customization</h3>
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
  &#123;&#123; colors.hex3 }}
&lt;/McColorpicker></pre
    >
    <hr />
    <p>
      By default the colorpicker will listen for clicks outside and
      automatically hide the popout.
    </p>
    <p>
      You can disable this behaviour with the boolean prop
      <code>no-auto-hide</code>:
    </p>
    <div class="example">
      <McColorpicker no-auto-hide v-model="colors.hex3" />
    </div>
    <pre>&lt;McColorpicker no-auto-hide v-model="colors.hex3" /></pre>
    <hr />

    <p>You can show or hide the popup programmatically:</p>
    <div class="example">
      <button @click="$refs['programmatic'].show()">Show popout</button>
      <button @click="$refs['programmatic'].hide()">Hide popout</button>
      <button @click="$refs['programmatic'].toggle()">Toggle popout</button>

      <McColorpicker ref="programmatic" no-auto-hide v-model="colors.hex3" />
    </div>
    <p>
      Since by default a click outside the component would hide the popout you
      need to add <code>no-auto-hide</code> to get the expected behaviour from
      <code>toggle()</code>
    </p>
    <pre>
&lt;button @click="$refs['programmatic'].show()">Show popout&lt;/button>
&lt;button @click="$refs['programmatic'].hide()">Hide popout&lt;/button>
&lt;button @click="$refs['programmatic'].toggle()">Toggle popout&lt;/button>
&lt;McColorpicker ref="programmatic" no-auto-hide v-model="colors.hex3" /></pre
    >
    <hr />

    <p>
      Disable popout show / hide on preview click with
      <code>no-preview-click-handler</code>:
    </p>
    <div class="example">
      <button @click="$refs['noShow'].show()">Show popout</button>

      <McColorpicker
        ref="noShow"
        no-preview-click-handler
        v-model="colors.hex3"
      />
    </div>
    <pre>
&lt;button @click="$refs['noShow'].show()">Show popout&lt;/button>
&lt;McColorpicker
  ref="noShow"
  no-preview-click-handler
  v-model="colors.hex3"
/></pre
    >
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
  width: 600px;
  text-align: left;
  padding: 2em;
}
* {
  vertical-align: middle;
}
h3 {
  margin-top: 50px;
  border-bottom: 3px solid #123456;
}
.example {
  text-align: center;
  position: relative;
}
p .mccolorpicker {
  margin: 0 1em;
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
table td pre,
table td code {
  display: inline-block;
  max-width: 250px;
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
</style>
