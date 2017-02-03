import chai from 'chai';
import dirtyChai from 'dirty-chai';
import Library from '../src/library';

chai.use(dirtyChai);
chai.expect();

const expect = chai.expect;

describe('Library', () => {
  it('should run ES6 code perfectly', () => {
    const l = new Library();

    expect(l.world()).to.eql({ text: 'world' });
  });
});
