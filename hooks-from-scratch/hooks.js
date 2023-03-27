const React = (function () {
  let hooks = []

  // Because of this index the Rules for Hooks exist
  // when hooks are called conditionally, these indices get thrown off
  let idx = 0

  function useState(initVal) {
    const state = hooks[idx] || initVal
    const _idx = idx
    const setState = (newVal) => {
      hooks[_idx] = newVal
    }
    idx += 1
    return [state, setState]
  }

  function render(Component) {
    idx = 0
    const C = Component()
    C.render()
    return C
  }

  function useEffect(callback, depArray) {
    const oldDeps = hooks[idx]
    let hasChanged = true
    if (oldDeps) {
      // Object.is is used instead of ===
      // because NaN === NaN is evaluated to false
      // and Object.is(NaN, NaN) is evaluated to true
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]))
    }
    if (hasChanged) {
      callback()
    }
    hooks[idx] = depArray
    idx += 1
  }

  return { useState, useEffect, render }
})()

function Component() {
  const [count, setCount] = React.useState(1)
  const [text, setText] = React.useState('apple')
  React.useEffect(() => {
    console.log('jsconfffff')
  }, [text, count])
  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (word) => setText(word),
  }
}

var App = React.render(Component)
App.click()
App = React.render(Component)
App.type('pear')
App = React.render(Component)
