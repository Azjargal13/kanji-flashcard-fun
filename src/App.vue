<template>
  <v-app>
    <v-content>
      <mainView />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import mainView from "./components/mainView.vue";

export default Vue.extend({
  name: "App",

  components: {
    mainView
  },

  data: () => ({
    //
  })
});
</script>
<style scoped>
.app {
  font-family: "Noto Serif JP", serif;
}
</style>