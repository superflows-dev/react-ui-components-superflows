import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  AlertError, ButtonNext, InputEmail, VSpace, LogoMast } from 'react-ui-components-superflows'

const App = () => {
  return <>

    <VSpace />
    <LogoMast imageUrl="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_black.png" imageAlt="This is a test image" />
    <VSpace />
    <AlertError caption="Error seen" />
    <VSpace />
    <ButtonNext />
    <VSpace />
    <InputEmail />

  </>
  
}

export default App
