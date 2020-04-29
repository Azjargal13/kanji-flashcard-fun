<template>
  <v-app>
    <v-content>
      <mainView />

      <v-footer class="primary mt-5">
        <v-col class="text-center white--text" cols="12">
          made with full of
          <v-icon color="white">$heart</v-icon>
          in
          {{ new Date().getFullYear() }}.
        </v-col>
        <v-col class="text-center white--text" cols="12">Find the creator from here</v-col>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import mainView from "./components/mainView.vue";

export default Vue.extend({
  name: "App",

  components: {
    mainView: mainView
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