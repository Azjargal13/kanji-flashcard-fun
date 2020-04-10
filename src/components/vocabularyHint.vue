<template>
  <div >
    <v-btn color="primary" @click="showThem" class="ma-3">To see vocab list</v-btn>
    <v-card v-show="hide" class="mx-auto" max-width="344">
      <v-card-text>
        <div>Word of the Day {{fcardKanji}} </div>
      </v-card-text>
    </v-card>

  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import KanjiList from '../lib/getKanjiList';

@Component
export default class VocabularyHint extends Vue {
  private hide = false;
  private kaList = new KanjiList()
  private n1vocab=  this.kaList.getN1Vocab()
  private n2vocab=  this.kaList.getN2Vocab()
  private n3vocab=  this.kaList.getN3Vocab()
  private n4vocab=  this.kaList.getN4Vocab()
  private n5vocab=  this.kaList.getN5Vocab()
  
  showThem(){
    this.toggleVocab()
    this.lookUpKanjiFromN5Data(this.fcardKanji)
  }
  toggleVocab() {
    this.hide = !this.hide;
  }
  @Prop({ default: ' value' }) readonly fcardKanji!: string
  
  lookUpKanjiFromData(kanji: string){
  }
  lookUpKanjiFromN1Data(kanji: string){
  }
  lookUpKanjiFromN2Data(kanji: string){

  }
  lookUpKanjiFromN3Data(kanji: string){

  }
  lookUpKanjiFromN4Data(kanji: string){

  }
  lookUpKanjiFromN5Data(kanji: string){
    return this.n5vocab.search(kanji)
  }

}
</script>

<style scoped>
</style>