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

All the components are responsive built in. Usage and customization options shown below.

### AlertError

Alert component used to show an error message

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AlertError } from 'react-ui-components-superflows'

const App = () => {

  return (
    <div>
      {/* Simple usage */}
      <AlertError caption="Duplications not allowed" />

      {/* Advanced usage */}
      <AlertError caption="Duplications not allowed" custom={{backgroundColor:"#F4CFCA", color:"#000000", borderColor:"#000000"}}/>
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
      {/* Simple usage */}
      <AlertSuccess caption="Operation successful!" />

      {/* Advanced usage */}
      <AlertSuccess caption="Duplications not allowed" custom={{backgroundColor:"#D7ECDE", color:"#99A89E", borderColor:"#99A89E"}}/>
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### ButtonNext

Button component, which is designed for navigating to the next screen after click

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
      {/* Simple usage */}
      <ButtonNext 
        caption="Verify" 
        disabled={otp.length === 0} 
        onClick={onClick} />

      {/* Advanced usage */}
      <ButtonNext 
        caption="Verify" 
        disabled={otp.length === 0} 
        onClick={onClick}
        icon="ArrowRight"
        custom={{backgroundColor:"#F4CFCA", color:"#000000"}} />
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)


### ButtonCancel

Button component, which is designed as a button to cancel any activity

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonCancel } from 'react-ui-components-superflows'

const App = () => {

  function onClick() {
    // code after clicking
  }

  return (
    <div>
      {/* Simple usage */}
      <ButtonCancel
        caption="Cancel" 
        disabled={false} 
        onClick={onClick} />

      {/* Advanced usage */}
      <ButtonCancel 
        caption="Cancel" 
        disabled={false} 
        onClick={onClick}
        icon="ArrowRight"
        custom={{backgroundColor:"#F4CFCA", color:"#000000"}} />
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)


### ButtonNeutral

Button component, which is designed as a neutral component and can be used for any purpose

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonNeutral } from 'react-ui-components-superflows'

const App = () => {

  function onClick() {
    // code after clicking
  }

  return (
    <div>
      {/* Simple usage */}
      <ButtonNeutral
        caption="Update" 
        disabled={false} 
        onClick={onClick} />

      {/* Advanced usage */}
      <ButtonNeutral 
        caption="Update" 
        disabled={false} 
        onClick={onClick}
        icon="Save"
        custom={{backgroundColor:"#F4CFCA", color:"#000000"}} />
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

      {/* Simple usage */}
      <ButtonTimer 
        timer={30} 
        captionBefore="Resend OTP in " 
        captionAfter="Resend OTP" 
        onClick={onResend()}/>

      {/* Advanced usage */}
      <ButtonTimer 
        timer={30} 
        captionBefore="Resend OTP in " 
        captionAfter="Resend OTP" 
        onClick={onResend()}
        custom={{backgroundColor:"#efefef", color:"#000000"}}/>
      
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
      {/* Simple Usage */}
      <Footnote caption="Version 3.12" />

      {/* Advanced Usage */}
      <Footnote caption="Version 3.12" custom={{color: "red"}}/>
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
      {/* Simple Usage */}
      <InfoBlock caption="OTP has been emailed to abc@gmail.com" />

      {/* Advanced Usage */}
      <InfoBlock caption="OTP has been emailed to abc@gmail.com"  custom={{backgroundColor:"#F4CFCA", color:"#000000", borderColor:"#000000"}}/>
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

### InputName

Email input, with in built validation, enter press handling and autofocus.

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputName } from 'react-ui-components-superflows'

const App = () => {

  const [name, setName] = useState('');

  function onEnterName() {
    // code after on enter pressed
  }

  return (
    <div>
      <InputName 
        setValue={setName} 
        autofocus={true} 
        onEnterPressed={() => {onEnterName()}}/>
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### InputSearch

Search input, with in built validation, enter press handling and autofocus.

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputSearch } from 'react-ui-components-superflows'

const App = () => {

  const [searchString, setSearchString] = useState('');

  function onEnterSearch() {
    // code after on enter pressed
  }

  return (
    <div>
      <InputSearch 
        setValue={setSearchString} 
        autofocus={true} 
        onEnterPressed={() => {onEnterSearch()}}/>
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### InputDob

Email input, with in built validation, enter press handling and autofocus.

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputDob } from 'react-ui-components-superflows'

const App = () => {

  const [dob, setDob] = useState('');

  function onEnterDob() {
    // code after on enter pressed
  }

  return (
    <div>
      <InputDob 
        setValue={setDob} 
        autofocus={true} 
        onEnterPressed={() => {onEnterDob()}}/>
    </div>
  )

}

export default App

```
[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-lipf5o?file=App.tsx)

### InputGender

Gender input, with in built in switch.

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGender } from 'react-ui-components-superflows'

const App = () => {

  const [gender, setGender] = useState(0);

  function onChangeGender(value) {
    setGender(value)
  }

  return (
    <div>
      <InputDob 
        onChange={onChangeGender}
        selectedValue={1} />
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
