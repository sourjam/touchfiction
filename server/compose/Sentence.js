import { List, Map } from 'immutable';

export default class Sentence {
  constructor(props) {
    this.content = List();
  }

  content() {
    return this.content;
  }
}