import { expect } from 'chai';
import { Word } from '../compose/compose';

describe('fiction', () => {

  describe('a word', () => {

    it('has CSS properties', () => {

      let word = new Word();

      expect(word.css).to.exist;

    })

  })


})