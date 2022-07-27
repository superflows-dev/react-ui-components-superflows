import React, { useEffect } from 'react'
import { useState, useRef } from "react";
import { Col, Row, Container } from 'react-bootstrap';
import { CalendarEvent } from 'react-bootstrap-icons';

const InputDob = (props) => {

    const [borderColor, setBorderColor] = useState('border-secondary')
    const [dd, setDD] = useState('');
    const [mm, setMM] = useState('');
    const [yyyy, setYYYY] = useState('');
    const [lastKey, setLastKey] = useState('');
    const refInputDD = useRef(null);
    const refInputMM = useRef(null);
    const refInputYYYY = useRef(null);

    useEffect(() => {
        if(props.autofocus != null) {
            if(props.autofocus) onClick();
        }
    }, [])

    const onClick = () => {
        // refInputDD.current.focus();
        // refInputMM.current.focus();
        // refInputYYYY.current.focus();
    }

    useEffect(() => {
        onKeyUp();
    },[dd, mm, yyyy])

    const onKeyUpDD = (event) => {
        setLastKey(event.key);
        setDD(event.target.value + "");
        onKeyUp(event);
    }

    const onKeyUpMM = (event) => {
        setLastKey(event.key);
        setMM(event.target.value + "");
        onKeyUp(event);
    }

    const onKeyUpYYYY = (event) => {
        setLastKey(event.key);
        setYYYY(event.target.value + "");
        onKeyUp(event);
    }

    const onKeyUp = () => {
        if(validate(dd, mm, yyyy)) {
            setBorderColor('border-success')
            const dateVal = parseInt(Date.parse(Date.parse(yyyy + "-" + mm + "-" + dd))/1000);
            if(props.setValue != null) props.setValue(dateVal);
            if(lastKey == "Enter" && props.onEnterPressed != null) props.onEnterPressed(); 
        } else {
            if(dd == "" && mm == "" && yyyy == "") {

            } else {
                setBorderColor('border-danger')
            }
            if(props.setValue != null) props.setValue('');
        }
    }

    const validate = (dd, mm, yyyy) => {
        if (dd == "" || 
            mm == "" || 
            yyyy == "" || 
            parseInt(dd) <= 0 ||
            parseInt(dd) > 31 ||
            parseInt(mm) < 0 ||
            parseInt(mm) > 12 ||
            parseInt(yyyy) < 1900 ||
            parseInt(yyyy) > 3000
            )  {

                return false;

        } else { 

            if(mm == "2") {
                if((parseInt(mm)%4 === 0 && parseInt(dd) > 29) ||
                    (parseInt(mm)%4 > 0 && parseInt(dd) > 28)) {
                        return false;
                    } else {
                        return true;
                    }
            } else if (mm == "4" || mm == "6" || mm == "9" || mm == "11") {
                if(parseInt(dd) > 30) {
                    return false;
                } else {
                    return true;
                }
            } 

            return true;
        }
    }

    return (

        <Container className="w-100" >
            <Row className='justify-content-center'>
                <Col onClick={onClick} sm={12} xs={12} md={12} xxl={12} className={`d-flex border rounded-3 bg-white align-items-center p-2 text-secondary ${borderColor}`} >
                    <CalendarEvent className='me-3 ms-2'/>
                    <div className='me-3'>
                        {
                            props.caption != null ? props.caption : 'Date of Birth'
                        }
                        
                    </div>
                    <input ref={refInputDD} type="number" placeholder='DD' className='flex-grow-1 border-0 border-start text-center' onKeyUp={onKeyUpDD} style={{width: '50px'}}/>
                    <input ref={refInputMM} type="number" placeholder='MM' className='flex-grow-1 border-0 border-start text-center' onKeyUp={onKeyUpMM} style={{width: '50px'}}/>
                    <input ref={refInputYYYY} type="number" placeholder='YYYY' className='flex-grow-1 border-0 border-start text-center' onKeyUp={onKeyUpYYYY} style={{width: '100px'}}/>
                </Col>
            </Row>
        </Container>
        

    );

}

export default InputDob;