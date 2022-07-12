# react-ui-components-superflows

> UI kit for the Superflows design language

[![NPM](https://img.shields.io/npm/v/react-ui-components-superflows.svg)](https://www.npmjs.com/package/react-ui-components-superflows) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ui-components-superflows
```

## Usage

```jsx
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  AlertError, ButtonNext, InputEmail, VSpace } from 'react-ui-components-superflows'

const App = () => {
  return <>

    <VSpace />
    {/*  Usually errorValue is a state variable. When error is blank, the element gets hidden  */}
    <AlertError caption={errorValue} />
    <VSpace />
    <ButtonNext />
    {/*  A component to insert some basic vertical space  */}
    <VSpace />
    <InputEmail />

  </>
  
}

export default App

```

## License

MIT © [superflows-dev](https://github.com/superflows-dev)
