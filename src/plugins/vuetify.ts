import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      speaker: 'mdi-volume-high',
      heart: 'mdi-heart'
    }
  },
  theme: {
    themes: {
      light: {
        primary: "#26a69a", // #E53935
        secondary: "", // #FFCDD2
        accent: "" // #3F51B5
      },
    },
  },
});
