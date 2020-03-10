<template>
  <div id="main" class="mx-auto my-auto">
    <v-card class="mx-auto my-auto text-center kanji-card" width="250" height="350">
      <span align="center" class="kanji">{{kanjiKey[displayKanji]}}</span>
      <div>JPLT level: N{{kanjiValue[displayKanji].jlpt_new}}</div>
    </v-card>
    <v-card class="mx-auto my-auto primary kanji-card-back pa-4 white--text" width="250" height="350">
      <div class="headline mt-3 pa-1"> Kanji meaning: 
      <span class="subtitle-1 " v-for="m in kanjiValue[displayKanji].meanings" :key=m>{{m}}, </span>
      </div>
      <div class="headline pa-1"> On reading:
      <span class="subtitle" v-for="m in kanjiValue[displayKanji].readings_on" :key=m>{{m}} </span>
      </div>
      <div class="headline pa-1"> Kun reading:
      <span class="subtitle" v-for="m in kanjiValue[displayKanji].readings_kun" :key=m>{{m}} </span>
      </div>
      <div class="headline pa-1"> Memorize keyword:
      <span class="subtitle-1" v-for="m in kanjiValue[displayKanji].wk_radicals" :key=m>{{m}}, </span>
      <!-- <p>Imagine the following words and make funny story to recall later.</p> -->
      </div>
      
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import KanjiList from "../lib/getKanjiList";

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