import Library from '../src/library';

test('Library ES6 code runs perfectly', () => {
  const l = new Library();

  expect(l.world()).toEqual({ text: 'world' });
});
