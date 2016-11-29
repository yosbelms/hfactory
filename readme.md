# HFactory

Reduces boilerplate when using Virtual-DOM libraries without transpilation. It mimics `React.DOM` behavior but makes it pluggable in any existent Virtual-DOM library.

## Installation

```shell
npm install --save yosbelms/hfactory
```

## Usage

HFactory objects contains convenient wrappers for all elements including SVG.

```js
// Where `h` is the interface to create virtual-dom elements

const hfactory = require('hfactory')
const {div, strong, input} = hfactory(h)
```

Without destructuring

```js
const dom = hfactory(h)
dom.footer({}, dom.span('text'))
```

## React example

```js
const {div, strong} = hfactory(React.createElement)

const HelloView = (name) =>
    div({className: 'info'},
        strong({}, 'Hello ' + name))

ReactDOM.render(HelloView('React!'), document.getElementById('app'))
```

## Maquette example

```js
const {div, strong} = hfactory(maquette.h)
const projector = maquette.createProjector()

const HelloView = (name) => () =>
    div({class: 'info'},
        strong('Hello ' + name))

projector.append(document.getElementById('app'), HelloView('Maquette!'))
```

# More examples

https://github.com/yosbelms/hfactory/tree/master/examples


MIT (c) 2016-present Yosbel Marin
