import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        "link-text": "#000000",
        "drawer": "#f5f5f5"
      },
      dark: {
        "link-text": "#616161",
        "drawer": "#212121"
      },
    }
  }
});
