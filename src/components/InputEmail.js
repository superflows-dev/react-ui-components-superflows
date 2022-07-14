import React from 'react'
import { useState, useRef } from "react";
import { Col, Row, Container } from 'react-bootstrap';
import { Envelope } from 'react-bootstrap-icons';

const InputEmail = (props) => {

    const [borderColor, setBorderColor] = useState('border-secondary')
    const refInput = useRef(null);

    const onClick = () => {
        refInput.current.focus();
    }

    const onKeyUp = (event) => {
        if(validate(event.target.value)) {
            setBorderColor('border-success')
            if(props.setValue != null) props.setValue(event.target.value);
            if(event.key == "Enter" && props.onEnterPressed != null) props.onEnterPressed(); 
        } else {
            setBorderColor('border-danger')
            if(props.setValue != null) props.setValue('');
        }
    }

    const validate = (value) => {
        return value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }

    return (

        <Container className="w-100" >
            <Row className='justify-content-center'>
                <Col onClick={onClick} sm={12} xs={12} md={12} xxl={12} className={`d-flex border rounded-3 bg-white align-items-center p-2 text-secondary ${borderColor}`} >
                    <Envelope className='me-3 ms-2'/>
                    <div className='me-3'>
                        Email
                    </div>
                    <input ref={refInput} type="email" className='flex-grow-1 border-0 border-start ps-3' onKeyUp={onKeyUp}/>
                </Col>
            </Row>
        </Container>
        

    );

}

export default InputEmail;