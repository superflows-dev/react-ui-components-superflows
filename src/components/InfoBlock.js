import React from 'react'
import { Col, Row, Container, Alert } from 'react-bootstrap';
import { PinAngle } from 'react-bootstrap-icons';
import VSpace from './VSpace';

const InfoBlock = (props) => {

    return (

        <div>
            {props.caption != '' && 
                <div>
                    <VSpace />
                    <Container className="w-100" >
                        <Row className='justify-content-end'>
                            <Col sm={12} xs={12} md={12} xxl={12} className={`d-flex p-0`}>
                                <Alert variant="secondary w-100 m-0">
                                    <PinAngle/> &nbsp; {props.caption}
                                </Alert>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </div>
        
        

    );

}

export default InfoBlock;