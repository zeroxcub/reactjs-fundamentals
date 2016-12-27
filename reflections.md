# Webpack

Webpack is a module bundler coupled with a build system:

- bundle module by scanning entrypoint code to generate an unique file aleviating the need for a manual dependency management with many module
- can minify, postprocess `less`, `scss` and so on with plugins.
- can apply transpilation with `loader` (babel loader for transpiling es6 and jsx code)


----------------------------------------------------------

# React Component

## Creation

- need `react` and `react-dom` module to create a component 
- `react` module for creating new component with `React.createClass()` method
- `react-dom` module to attach the newly created component to a dom element with `ReactDom.render()` method

## Passing data

- we pass data (**props**) to react component as ***attribute*** (like html attribute) and we can access and refer to them inside the component via `this.props.attribute_name`

- 