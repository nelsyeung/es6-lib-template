import { find } from 'core-js/es6/array';

export default function () {
  const helloWorld = [
    { text: 'hello' },
    { text: 'world' },
    { text: '!' },
  ];

  return find(helloWorld, t => t.text === 'world');
}
