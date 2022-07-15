import React, { useEffect } from 'react'
import { useState, useRef } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

const ButtonTimer = (props) => {

    const [timer, setTimer] = useState(props.timer);
    const [disabled, setDisabled] = useState(true)
    const [textColor, setTextColor] = useState('text-dark')

    useEffect(() => {

        if(timer > 0) {
            setDisabled(true);
            setTimeout(() => {setTimer(timer - 1)}, 1000);
        }  else {
            setDisabled(false);
        }

    }, [timer])

    const onTouchStart = (value) => {
        value ? setTextColor('text-light') : setTextColor('text-dark');
    }

    return (

        <Container className="w-100" >
            <Row className='justify-content-end'>
                <Col className="p-0"></Col>
                <Col className="col-auto p-0">
                    <Button variant="btn-link" className={`btn btn-link ml-auto align-self-end fw-bolder border-0  ${textColor}`} onTouchStart={() => {onTouchStart(true)}} onMouseDown={() => {onTouchStart(true)}} onTouchEnd={() => {onTouchStart(false)}} onMouseUp={() => {onTouchStart(false)}} disabled={disabled} onClick={() => {props.onClick()}}>
                        {timer > 0 ? props.captionBefore : props.captionAfter} {timer > 0 ? timer + "s" : ""}
                    </Button>
                </Col>
            </Row>
        </Container>

    );

}

export default ButtonTimer;