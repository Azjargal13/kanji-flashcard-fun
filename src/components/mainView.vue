<template>
  <div id="main" class="mx-auto my-auto">
    <v-card class="mx-auto my-auto text-center" width="250" height="350">
      <span align="center" class="kanji">{{kanjiKey[displayKanji]}}</span>
      <div>JPLT level: N{{kanjiValue[displayKanji].jlpt_new}}</div>
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
  private data = this.kanjiList.getKanji();

  // based on the len of data, generate random number to access data
  // generate random data card in page
  private displayKanji = this.generateRandomKanji();
  private kanjiKey = Object.keys(this.data);
  private kanjiValue = Object.values(this.data);

  generateRandomKanji() {
    return Math.floor(Math.random() * (2136 - 0 + 1) + 0);
  }

  // when u hover on kanji, it will zoom-in
}
</script>

<style scoped>
#main {
  font-family: "Noto Serif JP", serif;
}
.kanji {
  font-size: 180px;
}
.kanji:hover {
  background-color: #26a69a;
}
</style>