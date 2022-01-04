import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import installI18n from './lang/index'

loadFonts()

const app = createApp(App)
installI18n(app)

app
//  .use(i18n)
  .use(vuetify)
  .mount('#app')