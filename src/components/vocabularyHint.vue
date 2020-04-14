<template>
  <div>
    <v-btn color="primary" @click="showThem" class="ma-3">
      <span v-show="!hide">
        To see vocab list
      </span>
      <span v-show="hide">
        To hide vocab list
      </span>
      </v-btn>
    <v-card v-show="hide" class="mx-auto" max-width="344">
      <v-card-text>
        <div>Word of the Day {{fcardKanji}}</div>
        <div class="text--primary" v-if="n1List.length!=0">
          <span class="font-weight-bold primary--text">
            N1 vocabs
          </span> 
          <v-row v-for="k in n1List" :key="k">
            <v-col class="pa-1">
              <v-list-item two-line rounded>
                <v-list-item-content class="col1">
                  <v-list-item-subtitle>{{n1vocab[k].hiragana}}</v-list-item-subtitle>
                  <v-list-item-title class="headline">{{n1vocab[k].word}}
                    
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col >
            <v-col>
              <v-icon v-text="'$speaker'"></v-icon>
            </v-col>
            <v-col class="pa-1">{{n1vocab[k].meaning}}</v-col>
          </v-row>
        </div>
        <div class="text--primary" v-if="n2List.length!=0">
          <span class="font-weight-bold primary--text">
            N2 vocabs
          </span> 
          <v-row v-for="k in n2List" :key="k">
            <v-col class="pa-1">
              <v-list-item two-line>
                <v-list-item-content class="col1">
                  <v-list-item-subtitle>{{n2vocab[k].hiragana}}</v-list-item-subtitle>
                  <v-list-item-title class="headline">{{n2vocab[k].word}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col>
              <v-icon v-text="'$speaker'" align="center"></v-icon>
            </v-col>
            <v-col class="pa-1">{{n2vocab[k].meaning}}</v-col>
          </v-row>
    
        </div>
        <div class="text--primary" v-if="n3List.length!=0">
          <span class="font-weight-bold primary--text">
            N3 vocabs
          </span> 
          <v-row v-for="k in n3List" :key="k">
            <v-col class="pa-1">
              <v-list-item two-line>
                <v-list-item-content class="col1">
                  <v-list-item-subtitle>{{n3vocab[k].hiragana}}</v-list-item-subtitle>
                  <v-list-item-title class="headline">{{n3vocab[k].word}}
                  
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col>
              <v-icon v-text="'$speaker'"></v-icon>
            </v-col>
            <v-col class="pa-1">{{n3vocab[k].meaning}}</v-col>
          </v-row>
        </div>
        <div class="text--primary" v-if="n4List.length!=0">
          <span class="font-weight-bold primary--text">
            N4 vocabs
          </span> 
         <v-row v-for="k in n4List" :key="k">
            <v-col class="pa-1">
              <v-list-item two-line>
                <v-list-item-content class="col1">
                  <v-list-item-subtitle>{{n4vocab[k].hiragana}}</v-list-item-subtitle>
                  <v-list-item-title class="headline">{{n4vocab[k].word}}
                
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col>
              <v-icon v-text="'$speaker'"></v-icon>
            </v-col>
            <v-col class="pa-1">{{n4vocab[k].meaning}}</v-col>
          </v-row>
        </div>
        <div class="text--primary" v-if="n5List.length!=0">
           <span class="font-weight-bold primary--text">
            N5 vocabs
          </span> 
          <v-row v-for="k in n5List" :key="k">
            <v-col class="pa-1">
              <v-list-item two-line>
                <v-list-item-content class="col1">
                  <v-list-item-subtitle>{{n5vocab[k].hiragana}}</v-list-item-subtitle>
                  <v-list-item-title class="headline">{{n5vocab[k].word}}
                
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col>
              <v-icon v-text="'$speaker'"></v-icon>
            </v-col>
            <v-col class="pa-1">{{n5vocab[k].meaning}}</v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import KanjiList from "../lib/getKanjiList";

@Component
export default class VocabularyHint extends Vue {
  private hide = false;
  private kaList = new KanjiList();
  private n1vocab = this.kaList.getN1Vocab();
  private n2vocab = this.kaList.getN2Vocab();
  private n3vocab = this.kaList.getN3Vocab();
  private n4vocab = this.kaList.getN4Vocab();
  private n5vocab = this.kaList.getN5Vocab();

  private n5List: Array<string> = [];
  private n4List: Array<string> = [];
  private n3List: Array<string> = [];
  private n2List: Array<string> = [];
  private n1List: Array<string> = [];

  showThem() {
    this.toggleVocab();
    // this.lookUpKanjiFromN1Data(this.fcardKanji);
    // this.lookUpKanjiFromN2Data(this.fcardKanji);
    // this.lookUpKanjiFromN3Data(this.fcardKanji);
    // this.lookUpKanjiFromN4Data(this.fcardKanji);
    // this.lookUpKanjiFromN5Data(this.fcardKanji);
  }
  toggleVocab() {
    this.hide = !this.hide;
  }
  @Prop({ default: " value" }) readonly fcardKanji!: string;

  @Watch('fcardKanji', {immediate:true})
  listenKanjiChange(kanji: string){
    this.lookUpKanjiFromN1Data(kanji)
    this.lookUpKanjiFromN2Data(kanji)
    this.lookUpKanjiFromN3Data(kanji)
    this.lookUpKanjiFromN4Data(kanji)
    this.lookUpKanjiFromN5Data(kanji)
  }
  lookUpKanjiFromData(kanji: string) {
    this.n1List = [];
    for (const ind in this.n1vocab) {
      const s: string = this.n1vocab[ind]["word"];
      if (s.includes(kanji)) {
        if (this.n1List.includes(ind) == false) {
          this.n1List.push(ind);
        }
      }
    }
  }
  lookUpKanjiFromN1Data(kanji: string) {
    this.n1List = [];
    for (const ind in this.n1vocab) {
      const s: string = this.n1vocab[ind]["word"];
      if (s.includes(kanji)) {
        if (this.n1List.includes(ind) == false) {
          this.n1List.push(ind);
        }
      }
    }
  }
  lookUpKanjiFromN2Data(kanji: string) {
    this.n2List = [];
    for (const ind in this.n2vocab) {
      const s: string = this.n2vocab[ind]["word"];
      if (s.includes(kanji)) {
        if (this.n2List.includes(ind) == false) {
          this.n2List.push(ind);
        }
      }
    }
  }
  lookUpKanjiFromN3Data(kanji: string) {
    this.n3List = [];
    for (const ind in this.n3vocab) {
      const s: string = this.n3vocab[ind]["word"];
      if (s.includes(kanji)) {
        if (this.n3List.includes(ind) == false) {
          this.n3List.push(ind);
        }
      }
    }
  }
  lookUpKanjiFromN4Data(kanji: string) {
    this.n4List = [];
    for (const ind in this.n4vocab) {
      const s: string = this.n4vocab[ind]["word"];
      if (s.includes(kanji)) {
        if (this.n4List.includes(ind) == false) {
          this.n4List.push(ind);
        }
      }
    }
  }
  lookUpKanjiFromN5Data(kanji: string) {
    this.n5List = [];
    for (const ind in this.n5vocab) {
      const s: string = this.n5vocab[ind]["word"];
      if (s.includes(kanji)) {
        if (this.n5List.includes(ind) == false) {
          this.n5List.push(ind);
        }
      }
    }
  }
}
</script>

<style scoped>
.col1{
  margin-top: -10px;
}
.row:hover{
 background-color: #E0F2F1;
}
</style>