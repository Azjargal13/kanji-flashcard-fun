<template>
  <v-footer absolute class="font-weight-medium">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} —
      <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped>
</style>