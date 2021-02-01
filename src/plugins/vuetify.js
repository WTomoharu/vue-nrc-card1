import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        "link-text": "#000000",
      },
      dark: {
        "link-text": "#616161",
      },
    }
  }
});
