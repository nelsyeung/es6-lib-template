import { find } from 'core-js/es6/array';

export default class {
  constructor() {
    this.helloWorld = [{ text: 'hello' }, { text: 'world' }, { text: '!' }];
  }

  world() {
    return find(this.helloWorld, t => t.text === 'world');
  }
}
