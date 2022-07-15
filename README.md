# react-ui-components-superflows

> UI kit for the Superflows design language

[![NPM](https://img.shields.io/npm/v/react-ui-components-superflows.svg)](https://www.npmjs.com/package/react-ui-components-superflows) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ui-components-superflows
```

## Dependencies

```bash
npm install --save react-bootstrap
npm install --save react-bootstrap-icons
```

## Usage

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  AlertError, ButtonNext, InputEmail, VSpace, LogoMast } from 'react-ui-components-superflows'

const App = () => {
  
  const [email, setEmail] = useState('')

  const onClickSubmit = async ()  => {

  }

  const onClickTimer = async ()  => {

  }

  return <>

    <AlertSuccessVanishing caption="Operation Successful" duration={5} />
    <VSpace />
    <LogoMast imageUrl="https://**************.png" imageAlt="This is a test image" />
    <VSpace />
    <AlertError caption="Error seen" />
    <VSpace />
    <ButtonNext caption={"Sign In"} disabled={email.length === 0} onClick={() => {onClickSubmit()}} />
    <VSpace />
    <InputEmail setValue={setEmail} autofocus={true} onEnterPressed={() => {onClickSubmit()}}/>
    <VSpace />
    <ButtonTimer timer={30} captionBefore="Resend OTP in " captionAfter="Resend OTP"  onClick={() => {onClickTimer()}}/>

  </>
  
}

export default App


```

## License

MIT © [superflows-dev](https://github.com/superflows-dev)
