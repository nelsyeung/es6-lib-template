import { find } from 'core-js/es6/array';

export default class {
  constructor() {
    this.helloWorld = [{ text: 'hello' }, { text: 'world' }, { text: '!' }];
  }

  world() {
    return find(this.helloWorld, (t) => {
      const result = t.text === 'world';
      return result;
    });
  }
}
