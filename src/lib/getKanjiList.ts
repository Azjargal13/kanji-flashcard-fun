export default class KanjiList {
    private data = require('./kanji-data.json')
    getKanji() {
        //console.log('hey', Object.keys(this.data).length)
        return this.data

    }
}