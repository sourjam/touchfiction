import { List, Map } from 'immutable';

export default class Word {
  constructor(props) {
    props = props || '';
    this.content = Map({
      text: props,
      color: 'black',
      size: '1em'
    });
    this.action = Map();
    this.prevContent = List();
    this.touch = Map();
    // touch or a choice
  }

  updateText(word) {
    this.prevContent = this.prevContent.push(this.content);
    this.content = this.content.set('text', word);
  }

  updateAction(action) {
    this.prevContent = this.prevContent.push(this.content);
    action.forEach((v, k) => {
      this.content = this.content.set(k, v);
    });
  }

  action() {
    return this.action;
  }

  content() {
    return this.content;
  }
}