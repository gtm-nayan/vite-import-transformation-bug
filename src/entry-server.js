import App from './App.svelte'
import foo from "./test.js";

export function render() {
debugger;
  const abc = foo();

  try {
    0;
  } catch {
    const foo = 23;
  }

  // @ts-ignore
  return App.render()
}
