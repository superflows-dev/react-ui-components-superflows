import React, { useEffect } from 'react'
import { useState, useRef } from "react";
import { Container, Row, Col, Alert } from 'react-bootstrap';
import VSpace from './VSpace';

const AlertSuccessVanishing = (props) => {

    const [timer, setTimer] = useState(props.duration);
    const [textColor, setTextColor] = useState('text-dark')

    useEffect(() => {

        if(timer >= 0) {
            setTimeout(() => {setTimer(timer - 1)}, 1000);
        }

    }, [timer])

    useEffect(() => {

        setTimer(props.duration);

    }, [props.duration])

    return (

        <div>
            {props.caption != '' && timer > 0 && duration > 0 && 
                <div>
                    <VSpace />
                    <Container className="w-100" >
                        <Row className='justify-content-end'>
                            <Col sm={12} xs={12} md={12} xxl={12} className={`d-flex p-0`}>
                                <Alert variant="success w-100 m-0">
                                    {props.caption}
                                </Alert>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </div>

        // <Container className="w-100" >
        //     <Row className='justify-content-end'>
        //         <Col className="p-0"></Col>
        //         <Col className="col-auto p-0">
        //             <Button variant="btn-link" className={`btn btn-link ml-auto align-self-end fw-bolder border-0  ${textColor}`} onTouchStart={() => {onTouchStart(true)}} onMouseDown={() => {onTouchStart(true)}} onTouchEnd={() => {onTouchStart(false)}} onMouseUp={() => {onTouchStart(false)}} disabled={disabled} onClick={() => {setTimer(props.timer); props.onClick()}}>
        //                 {timer > 0 ? props.captionBefore : props.captionAfter} {timer > 0 ? timer + "s" : ""}
        //             </Button>
        //         </Col>
        //     </Row>
        // </Container>

    );

}

export default AlertSuccessVanishing;