export default class KanjiList {
    private data = require('./kanji-data.json')
    private n1data = require('./n1.json')
    private n2data = require('./n2.json')
    private n3data = require('./n3.json')
    private n4data = require('./n4.json')
    private n5data = require('./n5.json')
    
    getKanji() {
        //console.log('hey', Object.keys(this.data["meanings"]))
        return this.data

    } 

    getN1Vocab(){
        return this.n1data
    }
    
    getN2Vocab(){
        return this.n2data
    }
    
    getN3Vocab(){
        return this.n3data
    }
    
    getN4Vocab(){
        return this.n4data
    }
    
    getN5Vocab(){
        return this.n5data
    }
}