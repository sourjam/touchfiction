import { expect } from 'chai';
import Word from '../compose/Word';
import Sentence from '../compose/Sentence';
import { Map } from 'immutable';

describe('fiction', () => {

  describe('a word', () => {

    it('has Content properties', () => {

      let word = new Word('Once');

      expect(word.content.get('color')).to.equal('black');
      expect(word.content.get('size')).to.equal('1em');
      expect(word.content.get('text')).to.equal('Once');

    });

    it('can update text', () => {
      let word = new Word();

      word.updateText('Hello')

      expect(word.content.get('text')).to.equal('Hello');

    });

    it('has no default Action', () => {
      let word = new Word();

      expect(word.action.size).to.equal(0);

    });

    it('can update the Word object', () => {
      let word = new Word('Once');

      expect(word.action.size).to.equal(0);

      let action = new Map({text: 'upon', color: 'blue', size: '2em'});

      word.updateAction(action);

      expect(word.content.get('text')).to.equal('upon')

    });

  })

  describe('a sentence', () => {

    it('can have many words or one word', () => {
      let sentence = new Sentence('Once upon a time');

      expect(sentence.content.size).to.equal(4);

      let oneword = new Sentence('Hello');

      expect(oneword.content.size).to.equal(1);
    })
  })


})