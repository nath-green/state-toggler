function stateToggler (selector, options) {
  const defaults = {
    attr: 'data-state',
    states: ['open', 'closed']
  }

  // if options are set
  if (options) {
    for (var i in options) {
      // if option is defined and matches existing default then update defaults
      if (options[i] !== 'undefined' && defaults[i]) { defaults[i] = options[i] }
    }
  }

  let elements = document.querySelectorAll(selector)
  // convert NodeList to array so forEach can be used in all browsers
  let elementsArray = Array.prototype.slice.apply(elements)
  elementsArray.forEach(function (instance) {
    let state = instance.getAttribute(defaults.attr)
    let newState = (state === defaults.states[0]) ? defaults.states[1] : defaults.states[0]
    instance.setAttribute(defaults.attr, newState)
  })
}

module.exports = {stateToggler}
