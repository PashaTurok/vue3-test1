import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import installI18n from './lang/index'
import { createI18n } from 'vue-i18n'

loadFonts()

const app = createApp(App)
installI18n(app)

const i18n = createI18n({
  locale: 'en',
  messages: {
  }
})

app
  .use(i18n)
  .use(vuetify)
  .mount('#app')