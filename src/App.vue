<template>
  <v-app>
    <v-content>
      <mainView />
      <v-footer class="primary absolute">
        <v-col class="text-center white--text" cols="12">
          &copy; made with full of
          <v-icon color="white">$heart</v-icon>
          by Azaa in
          {{ new Date().getFullYear() }}.
        </v-col>
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
body footer div {
  font-family: "Noto Serif JP", serif;
}
</style>