## State Toggler

Toggle data state attribute

### Installation

`npm install state-toggler`

`import stateToggler from 'state-toggler'` or `const stateToggler = require('state-toggler')`

------

### Usage

`stateToggler(selector, options)`

The function takes two parameters, a **selector** and an **options** `{}`. This function is used to toggle a data attribute, similar to the toggleClass jQuery method. This is based on a pattern that uses data attributes to control state based styling.

If the data attribute (**data-state** by default) is set to **open**, the attribute will be toggled to **closed**.

| Parameter | Usage |
|--|--|
| selector | target element |
| options (optional) | override default options |

&NewLine;
#### Options
&NewLine;

| Option | Type | Default |
|--|--|--|
| attr | string | data-state |
| states | array (max 2) | open, closed |

---

### Examples

#### Default

JS
```
stateToggler('.modal')
```

HTML
```
<div class="modal" data-state="closed"></div>
```

SCSS
```
.modal {
  width: 400px;
  height: 400px;

  &[data-state="closed"] {
    display: none;
  }

  &[data-state="open"] {
    display: block;
  }
}
```
&NewLine;
#### With options

This will toggle `.nav-panel` between `collapsed` and `expanded` using the `data-state` attribute.

JS
```
stateToggler('.nav-panel', {
  states: ['collapsed', 'expanded']
})
```

HTML
```
<div class="nav-panel" data-state="collapsed"></div>
```

SCSS
```
.nav-panel {
  position: absolute;
  width: 400px;
  

  &[data-state="collapsed"] {
    right: -400px;
  }

  &[data-state="expanded"] {
    right: 0;
  }
}
```