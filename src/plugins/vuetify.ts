import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
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
