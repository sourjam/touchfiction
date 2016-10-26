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
    if (this.content.size > 0) {
      this.prevContent = this.prevContent.push(this.content);
    }
    let stringArr = string.split(' ');
    stringArr.forEach((word) => {
      let wordObj = new Word(word);
      this.content = this.content.push(wordObj);
    })
  }

  content() {
    return this.content;
  }
}