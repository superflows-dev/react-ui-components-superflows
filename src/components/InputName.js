import React, { useEffect } from 'react'
import { useState, useRef } from "react";
import { Col, Row, Container } from 'react-bootstrap';
import { CardHeading } from 'react-bootstrap-icons';

const InputName = (props) => {

    const [borderColor, setBorderColor] = useState('border-secondary')
    const refInput = useRef(null);


    useEffect(() => {
        if(props.autofocus != null) {
            if(props.autofocus) onClick();
        }
    }, [])

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
            /^([ \u00c0-\u01ffa-zA-Z'\-])+$/
          );
    }

    return (

        <Container className="w-100" >
            <Row className='justify-content-center'>
                <Col onClick={onClick} sm={12} xs={12} md={12} xxl={12} className={`d-flex border rounded-3 bg-white align-items-center p-2 text-secondary ${borderColor}`} >
                    <CardHeading className='me-3 ms-2'/>
                    <div className='me-3'>
                        {
                            props.caption != null ? props.caption : 'Name'
                        }
                        
                    </div>
                    <input ref={refInput} type="email" className='flex-grow-1 border-0 border-start ps-3' onKeyUp={onKeyUp}/>
                </Col>
            </Row>
        </Container>
        

    );

}

export default InputName;