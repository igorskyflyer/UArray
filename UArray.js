// @ts-nocheck
'use strict'

/**
 * Creates an Array that supports negative indices / indexes.
 * You can pass a single parameter of type `Array`
 * or multiple parameters of any primitive type.
 *
 *
 * **NOTE**: the actual return type is `Proxy` but since `Proxy`
 * objects behave the same way as the `target` object
 * whose behavior they modify, the return type is overridden.
 * @param {...any} [items]
 * @returns {Array}
 */
function UArray(items) {
  const argsCount = arguments.length

  if (argsCount <= 1 && !(arguments[0] instanceof Array)) {
    items = []
  }

  if (argsCount > 1) {
    // converts `arguments` object to a regular `Array`,
    // and as a consequence removes the `[Arguments]` message
    // when console-logging the array 🥳
    items = Array.prototype.slice.call(arguments)
  }

  return new Proxy(items, {
    get(target, prop) {
      if (!isNaN(prop)) {
        let index = parseInt(prop)

        if (index < 0) {
          index += target.length
        }

        return target[index]
      } else {
        return target[prop]
      }
    },
  })
}
