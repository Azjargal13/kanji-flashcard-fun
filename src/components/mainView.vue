<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div>Word of the Day</div>
        <p class="display-1 text--primary">be•nev•o•lent</p>
        <p>hey</p>
        <div class="text--primary">
          well meaning and kindly.
          <br />"a benevolent smile"
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4">Learn More</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import KanjiList from "../lib/getKanjiList";
import KanjiType from "../type/types";
@Component
export default class Counter extends Vue {
  // Class properties will be component data
  private kanjiList = new KanjiList();
  private data: KanjiType = this.kanjiList.getKanji();
}
</script>

<style scoped>
</style>