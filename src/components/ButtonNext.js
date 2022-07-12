import React from 'react'
import { useState, useRef } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const ButtonNext = (props) => {

    const [enabled, setEnabled] = useState(true)
    const [bgColor, setBgColor] = useState('bg-black')
    const [textColor, setTextColor] = useState('text-light')

    const onTouchStart = (value) => {
        value ? setBgColor('bg-light') : setBgColor('bg-dark');
        value ? setTextColor('text-dark') : setTextColor('text-white');
    }

    return (

        <Container className="w-100" >
            <Row className='justify-content-end'>
                <Col className="p-0"></Col>
                <Col className="col-auto p-0">
                    <Button className={`btn btn-primary ml-auto align-self-end fw-bolder border-0  ${textColor} ${bgColor}`} onTouchStart={() => {onTouchStart(true)}} onMouseDown={() => {onTouchStart(true)}} onTouchEnd={() => {onTouchStart(false)}} onMouseUp={() => {onTouchStart(false)}} disabled={props.disabled != null ? props.disabled : false} onClick={() => {props.onClick()}}>
                        {props.caption?props.caption:'Next'} &nbsp; <ArrowRightCircle />
                    </Button>
                </Col>
            </Row>
        </Container>

    );

}

export default ButtonNext;