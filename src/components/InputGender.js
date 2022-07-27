import React, { useEffect } from 'react'
import { useState, useRef } from "react";
import { Col, Row, Container } from 'react-bootstrap';
import { GenderAmbiguous } from 'react-bootstrap-icons';

const InputGender = (props) => {

    const [borderColor, setBorderColor] = useState('border-secondary')
    const [value, setValue] = useState(props.selectedValue);

    function onClick(value) {
        setValue(value);
        if(props.onChange != null) props.onChange(value);
    }

    return (

        <Container className="w-100" >
            <Row className='justify-content-center'>
                <Col sm={12} xs={12} md={12} xxl={12} className={`d-flex border rounded-3 bg-white align-items-center p-2 text-secondary ${borderColor}`} >
                    <GenderAmbiguous className='me-3 ms-2'/>
                    <div className='pe-3 border-end'>
                        {
                            props.caption != null ? props.caption : 'Gender'
                        }
                    </div>
                    <div className='d-flex flex-grow-1 border-0 justify-content-end align-items-center' >
                        <div 
                            onClick={() => {onClick(0)}}
                            className="px-2 py-1 border rounded me-2" 
                            style={{
                                fontSize: '90%',
                                cursor: 'pointer',
                                backgroundColor: value === 0 ? 'gray' : 'transparent',
                                color: value === 0 ? 'white' : 'gray',
                            }}>Female</div>
                        <div 
                            onClick={() => {onClick(1)}}
                            className="px-2 py-1 border rounded me-2" 
                            style={{
                                fontSize: '90%',
                                cursor: 'pointer',
                                backgroundColor: value === 1 ? 'gray' : 'transparent',
                                color: value === 1 ? 'white' : 'gray',
                            }}>Male</div>
                        <div 
                            onClick={() => {onClick(2)}}
                            className="px-2 py-1 border rounded" 
                            style={{
                                fontSize: '90%',
                                cursor: 'pointer',
                                backgroundColor: value === 2 ? 'gray' : 'transparent',
                                color: value === 2 ? 'white' : 'gray',
                            }}>Other</div>
                    </div>
                    
                </Col>
            </Row>
        </Container>
        

    );

}

export default InputGender;