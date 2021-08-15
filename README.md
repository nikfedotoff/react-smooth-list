# react-smooth-list

🍿 React component for animating an element's children, one by one.

## Installation

This package is distributed via npm.

`npm install react-smooth-list`

## Basic Usage

Here's the basic concept of how it rocks:

```js
import SmoothList from 'react-smooth-list';
// ...
<SmoothList>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</SmoothList>
```

## Options

Animates its children, one by one.

> ⚠️ To have children animate separately, they must be first-level children of the `<SmoothList>` component (i.e. members of its `props.children`).

#### Props

| Key                 | Type     | Default | Description                                                                                                            |
| ------------------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `delay`             | number   | 50      | Delay between each child's animation in milliseconds.                                                                  |
| `transitionDuration`| number   | 400     | Duration of each child's animation in milliseconds.                                                                    |
| `className`         | string   |         | Adds a `className` prop to the container div.                                                                          |
| `childClassName`    | string   |         | Adds a `className` prop to each child div, allowing you to style the direct children of the `SmoothList` component.        |
| `wrapperTag`        | string   | "div"   | Override the HTML element of the wrapping div.                                                                         |
| `childTag`          | string   | "div"   | Override the HTML element wrapped around each child element.                                                           |
| `visible`           | boolean  |         | If not `undefined`, the `visible` prop can be used to control when the fade in occurs. If set to `false` after the fade-in animation completes, the children will fade out one by one. |
| `onComplete`        | function |         | Specifies a callback to be called when the animation completes.                                                        |
| `animated`          | boolean  |         |                                                                                                                        |
