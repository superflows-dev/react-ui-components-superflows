import React, { useEffect } from 'react'
import { useState, useRef } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import * as Icons from 'react-bootstrap-icons';

const ButtonNext = (props) => {

    const [enabled, setEnabled] = useState(true)
    const [backgroundColor, setBackgroundColor] = useState('#aaa')
    const [color, setColor] = useState('#aaa')

    const { [props.icon]: Icon } = Icons

    const resetColors = () => {
        setBackgroundColor(props.custom != null ? (props.custom.backgroundColor != null ? props.custom.backgroundColor : 'black' ) : 'black');
        setColor(props.custom != null ? (props.custom.color != null ? props.custom.color : 'white' ) : 'white');
    }

    const invertColors = () => {
        setColor(props.custom != null ? (props.custom.backgroundColor != null ? props.custom.backgroundColor : 'black' ) : 'black');
        setBackgroundColor(props.custom != null ? (props.custom.color != null ? props.custom.color : 'white' ) : 'white');
    }

    useEffect(() => {
        resetColors();
    }, [])

    const onTouchStart = (value) => {
        if(value) {
            invertColors();
        } else {
            setTimeout(() => {resetColors();}, 300); 
        }
        
    }

    return (

        <Container className="w-100" >
            <Row className='justify-content-end'>
                <Col className="p-0"></Col>
                <Col className="col-auto p-0">
                    <Button 
                        onClick={(event) => {if(props.onClick != null) props.onClick(event)}}
                        className={`btn btn-primary ml-auto align-self-end fw-bolder border-0`} 
                        style={{ 
                            backgroundColor: backgroundColor,
                            color: color,
                        }}
                        onTouchStart={() => {onTouchStart(true)}} 
                        onMouseDown={() => {onTouchStart(true)}} 
                        onTouchEnd={() => {onTouchStart(false)}} 
                        onMouseUp={() => {onTouchStart(false)}} 
                        disabled={props.disabled != null ? props.disabled : false} 
                        >
                        {props.caption?props.caption:'Next'} &nbsp; {props.icon != null ? <Icon /> : <ArrowRightCircle />}
                    </Button>
                </Col>
            </Row>
        </Container>

    );

}

export default ButtonNext;