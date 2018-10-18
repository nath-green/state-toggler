'use strict';

function stateToggler(selector, options) {
  var defaults = {
    attr: 'data-state',
    states: ['open', 'closed']

    // if options are set
  };if (options) {
    for (var i in options) {
      // if option is defined and matches existing default then update defaults
      if (options[i] !== 'undefined' && defaults[i]) {
        defaults[i] = options[i];
      }
    }
  }

  var elements = document.querySelectorAll(selector);
  // convert NodeList to array so forEach can be used in all browsers
  var elementsArray = Array.prototype.slice.apply(elements);
  elementsArray.forEach(function (instance) {
    var state = instance.getAttribute(defaults.attr);
    var newState = state === defaults.states[0] ? defaults.states[1] : defaults.states[0];
    instance.setAttribute(defaults.attr, newState);
  });
}

module.exports = { stateToggler: stateToggler };