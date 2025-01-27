[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# go-to-top-react

> A lightweight and customizable React component that adds a "Go to Top" button to your web application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

To install and set up the library, run:

- [Demo](https://i.ibb.co/7nK00Vy/ezgif-4-4c2eb5555b.gif)

<img src=https://i.ibb.co/7nK00Vy/ezgif-4-4c2eb5555b.gif alt=devto style="margin-bottom: 5px;" />

## Installation

You can install the package via npm:

```bash
npm install go-to-top-react
```

Or you can install the package via yarn:

```bash
yarn add go-to-top-react
```

```jsx
import React from 'react';
import { GoToTop } from 'go-to-top-react';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      {/* Other content */}
      <GoToTop />

      {/* Add any custom css class */}
      {/* <GoToTop className='your-custom-class'/>*/}
    </div>
  );
}

export default App;
```

## Props Table

| Prop                 | Type   | Default Value                          | Description                                                   |
| -------------------- | ------ | -------------------------------------- | ------------------------------------------------------------- |
| `className`          | string | `""`                                   | Additional CSS class for the button container.                |
| `stroke`             | string | `"#2b4eff"`                            | Color of the circular progress stroke.                        |
| `bgColor`            | string | `"#ffffff80"`                          | Background color of the button.                               |
| `size`               | number | `46`                                   | Size (width and height) of the button in pixels.              |
| `iconSize`           | number | `30`                                   | Size of the icon inside the button in pixels.                 |
| `shadow`             | string | `"rgb(151 139 139 / 99%) 0px 0px 0px"` | Box shadow of the button.                                     |
| `transitionDuration` | string | `"200ms"`                              | Duration of the transition effects (e.g., fade-in, movement). |
| `strokeWidth`        | number | `4`                                    | Width of the circular progress stroke.                        |
| `iconStrokeWidth`    | number | `2`                                    | Width of the icon stroke.                                     |
| `iconStrokeColor`    | string | `"#2b4eff"`                            | Color of the icon stroke.                                     |

---

## Peer Dependencies

This package requires the following peer dependencies:

- **`react`**: `^18.0.0`
- **`react-dom`**: `^18.0.0`

## Authors

- **Suyel Haque** - [Facebook](https://www.facebook.com/slsuyel2) - [GitHub](https://github.com/slsuyel) - [Linkedin](https://www.linkedin.com/in/slsuyel)

## GitHub

- [GitHub](https://github.com/slsuyel/back-to-top)

This README provides a basic overview of the application, including installation instructions, usage examples, and information about the features and license. You can further customize it with additional details as needed.
