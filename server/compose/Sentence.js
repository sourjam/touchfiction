import { List, Map } from 'immutable';
import Word from './Word'

export default class Sentence {
  constructor(props) {
    this.content = List();
    this.prevContent = List();
    this.addWords(props);
    this.action = Map();
    this.touch = Map();
  }

  addWords(string) {
    console.log(this.content, this.prevContent)
    if (this.content.size > 0) {
      this.prevContent = this.prevContent.push(this.content);
    }
    let stringArr = string.split(' ');
    console.log('stringArr', stringArr)
    stringArr.forEach((word) => {
      let wordObj = new Word(word);
      this.content = this.content.push(wordObj);
    })
    console.log('done', this.content)
  }

  content() {
    return this.content;
  }
}