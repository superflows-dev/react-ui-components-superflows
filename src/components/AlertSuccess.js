import React from 'react'
import { Col, Row, Container, Alert } from 'react-bootstrap';
import { Envelope } from 'react-bootstrap-icons';
import VSpace from './VSpace';

const AlertSuccess = (props) => {

    return (

        <div>
            {props.caption != '' && 
                <div>
                    <VSpace />
                    <Container className="w-100" >
                        <Row className='justify-content-end'>
                            <Col sm={12} xs={12} md={12} xxl={12} className={`d-flex p-0`}>
                                <Alert variant="success w-100 m-0"
                                    style={{ 
                                        backgroundColor: props.custom != null ? (props.custom.backgroundColor != null ? props.custom.backgroundColor : 'auto' ) : 'auto',
                                        color: props.custom != null ? (props.custom.color != null ? props.custom.color : 'auto' ) : 'auto',
                                        borderColor: props.custom != null ? (props.custom.borderColor != null ? props.custom.borderColor : 'auto' ) : 'auto',
                                    }}>
                                    {props.caption}
                                </Alert>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </div>
        
        

    );

}

export default AlertSuccess;