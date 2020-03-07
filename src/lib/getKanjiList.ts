export default class KanjiList {
    private data = require('./kanji-data.json')

    getKanji() {
        return this.data[0]
    }
}