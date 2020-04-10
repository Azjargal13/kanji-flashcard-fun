<template>
  <v-container id="main" class="mx-auto my-auto pa-4">
    <v-row  align="center"
      justify="center"  height=100%>
      <v-column>
        <v-btn @click="prevKanji" color="primary">
        prev
      </v-btn>
    </v-column>
    <v-card class="mx-auto my-auto text-center kanji-card" width="250" height="350" v-show="front" @click="flipCard">
      <span align="center" class="kanji">{{kanjiKey[displayKanji]}}</span>
      <!-- <span align="center" class="kanji">{{cardKanji}}</span> -->
      <div>JPLT level: N{{kanjiValue[displayKanji].jlpt_new}}</div>
      
    </v-card>
    <v-card class="mx-auto my-auto primary kanji-card-back pa-2 white--text" width="250" height="350" v-show="!front" @click="flipCard">
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
    <v-column>
      <v-btn @click="nextKanji" color="primary">
      next
    </v-btn>
    </v-column>
    </v-row>
    <v-row class="align-center">
      <vocabulary-Hint :fcardKanji=vocabKanji class="mx-auto my-auto"/>
      </v-row>     
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import KanjiList from "../lib/getKanjiList";
import VocabularyHint from './vocabularyHint.vue';

@Component({
  components:{
    VocabularyHint
  }
})
export default class Counter extends Vue {
 
  // Class properties will be component data
  private kanjiList = new KanjiList();
  private data = this.kanjiList.getKanji();
  
  // based on the len of data, generate random number to access data
  // generate random data card in page
  private displayKanji: number  = this.generateRandomKanji();
  private kanjiKey: Array<string>  = Object.keys(this.data);
  private kanjiValue: Array<object>  = Object.values(this.data);
  
  // private cardKanji: string = this.kanjiKey[this.displayKanji]
  // for passing as Prop to show kanji vocab
  
  private vocabKanji: string = this.kanjiKey[this.displayKanji]
  // for showing prev kanjis
  private shownKanji: Array<number> = [this.displayKanji as number]

  // for flip card view
  private front=true

  generateRandomKanji() {
    const rand = Math.floor(Math.random() * (2136 - 0 + 1) + 0);
    return  rand
  }
  flipCard(){
    this.front = !this.front
  }
  nextKanji(){
    this.displayKanji = this.generateRandomKanji()
    this.shownKanji.push(this.displayKanji)
    this.passKanjiToLookUp(this.displayKanji)
  }
  prevKanji(){
    if (this.shownKanji.length > 0) {
        const len = this.shownKanji.length
        this.displayKanji = this.shownKanji[len-2]
        this.shownKanji.pop()
        this.passKanjiToLookUp(this.displayKanji)
    }  
  }
  passKanjiToLookUp(pos: number){
    this.vocabKanji = this.kanjiKey[pos]
  }
}
</script>

<style scoped>
#main {
  font-family: "Noto Serif JP", serif;
}
.kanji {
  font-size: 180px;
}


</style>