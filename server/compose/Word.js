import { List, Map } from 'immutable';

export default class Word {
  constructor(props) {
    this.content = Map({
      text: props,
      color: 'black',
      size: '1em'
    });
    this.action = Map();
    this.prevContent = List();
  }

  updateAction(action) {
    this.prevContent = this.prevContent.push(this.content);
    action.forEach((v, k) => {
      this.content = this.content.set(k, v);
      console.log(this.prevContent);
    });
  }

  action() {
    return this.action;
  }

  content() {
    return this.content;
  }
}