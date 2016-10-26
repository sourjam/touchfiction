import { List } from 'immutable';

export default class Paragraph {
  constructor(props) {
    this.content = List();
    this.prevContent = List();
    if (props.length > 0) {
      this.addSentences(props)
    }
  }

  addSentences(props) {
    this.prevContent = this.prevContent.push(this.content);
    props.forEach((sentence) => {
      this.content = this.content.push(sentence);
    })
  }

  content() {
    return this.content;
  }
}