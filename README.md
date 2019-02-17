# React Greeting

This is a simple component only just display "Hello, foo".

## Install

```bash
yarn add react-greeting
```

## Sample

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "../dist";

ReactDOM.render(
  <Greeting text="React" />,
  document.getElementById("root")
);
```

## LICENSE

MIT