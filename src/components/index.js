import McColorpicker from './McColorpicker.vue'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('McColorpicker', McColorpicker)
}

const plugin = {
  install,
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

McColorpicker.install = install

export default McColorpicker
