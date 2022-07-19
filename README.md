# react-ui-components-superflows

> UI kit for the Superflows design language

[![NPM](https://img.shields.io/npm/v/react-ui-components-superflows.svg)](https://www.npmjs.com/package/react-ui-components-superflows) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

## Note

This package is under active development. Expect frequent updates.

## Install

```bash
npm install --save react-ui-components-superflows
```
Then install the dependencies.

## Dependencies

```bash
npm install --save bootstrap
npm install --save react-bootstrap
npm install --save react-bootstrap-icons
```

## Available UI Components

All the components are responsive built in.

### AlertError

Alert component used to show an error message

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AlertError } from 'react-ui-components-superflows'

const App = () => {

  return (
    <div>
      <AlertError caption="Duplications not allowed" />
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### AlertSuccess

Alert component used to show a success message

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AlertSuccess } from 'react-ui-components-superflows'

const App = () => {

  return (
    <div>
      <AlertSuccess caption="Operation successful!" />
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### ButtonNext

Button component, which navigates to the next screen after click

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonNext } from 'react-ui-components-superflows'

const App = () => {

  const [otp, setOtp] = useState('')

  function onClick() {
    // code after clicking
  }

  return (
    <div>
        <ButtonNext 
          caption="Verify" 
          disabled={otp.length === 0} 
          onClick={onClick} />
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)


### ButtonTimer

Button component, which is initially disabled, enables after a specified time. After onClick, it again disabled and enables after the same time specified in second by duration.

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonTimer } from 'react-ui-components-superflows'

const App = () => {

  const [otp, setOtp] = useState('')

  function onResend() {
    // code after clicking
  }

  return (
    <div>
        <ButtonTimer 
          timer={30} 
          captionBefore="Resend OTP in " 
          captionAfter="Resend OTP" 
          onClick={onResend()}/>
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### Footnote

Footnote, useful for displaying version or copyright info

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footnote } from 'react-ui-components-superflows'

const App = () => {

  return (
    <div>
      <Footnote caption="Version 3.12" />
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### InfoBlock

Block of information, which the user should not miss

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InfoBlock } from 'react-ui-components-superflows'

const App = () => {

  return (
    <div>
      <InfoBlock caption="OTP has been emailed to abc@gmail.com" />
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### InputEmail

Email input, with in built validation, enter press handling and autofocus.

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputEmail } from 'react-ui-components-superflows'

const App = () => {

  const [email, setEmail] = useState('');

  function onEnterEmail() {
    // code after on enter pressed
  }

  return (
    <div>
      <InputEmail 
        setValue={setEmail} 
        autofocus={true} 
        onEnterPressed={() => {onEnterEmail()}}/>
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### InputOTP

OTP input, with in built validation, enter press handling and autofocus.

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputEmail } from 'react-ui-components-superflows'

const App = () => {

  const [otp, setOtp] = useState('');

  function onEnterOtp() {
    // code after on enter pressed
  }

  return (
    <div>
      <InputOtp 
        setValue={setOtp} 
        autofocus={true} 
        onEnterPressed={() => {onEnterOtp()}}/>
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### LogoMast

Component that shows an image like a mast head, typically used to display a logo in the login and registration flows.

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LogoMast } from 'react-ui-components-superflows'

const App = () => {

  return (
    <div>
      <LogoMast 
        imageUrl="https://**************.png" 
        imageAlt="This is a test image" />
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### VSpace

A vertical spacing block

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { VSpace } from 'react-ui-components-superflows'

const App = () => {

  return (
    <div>
      <VSpace />
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)


## License

MIT © [superflows-dev](https://github.com/superflows-dev)
