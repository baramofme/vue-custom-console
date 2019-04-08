/*
  vue-console 1.0.0
  https://github.com/onexdata/vue-console
  By Nick Steele <njsteele@gmail.com>
  Modified by <baramofme@gmail.com>

  Based on console.js 1.2.2 (pre-React)

  Apache 2.0 License.
 */

import consoleComponent from './console.vue'

export default {
  install (Vue, options) {
    Vue.prototype.$console = {
      commands: []
    }

    Vue.mixin({
      beforeMount () {
        // This registers new commands found on each component in your apps...
        function register (name, payload, instance) {
          // Run the payload to set up the command and get it's guide and function...
          var config = payload.bind(instance)()
          name = name.toLowerCase()
          console.log(name, config)
          instance.$console.commands[name] = {guide: config.guide, command: config.command.bind(instance)}
        }

        // Go through each component in the app and register all commands...
        let commands = this.$options.commands
        if (commands) {
          let name = this.$options.name
          if (!name) console.warn('vue-console: All components should all be named. Failing to do so will result in difficulty debugging later.')
          Object.keys(commands).forEach(command => register(command, this.$options.commands[command], this))
        }
      }
    })

    Vue.component('v-custom-console', consoleComponent)
  }
}
