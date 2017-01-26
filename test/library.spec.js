import chai from 'chai';
import dirtyChai from 'dirty-chai';
import library from '../src/library';

chai.use(dirtyChai);
chai.expect();

const expect = chai.expect;

describe('Library', () => {
  it('should run ES6 code perfectly', () => {
    expect(library()).to.eql({ text: 'world' });
  });
});
