import React from 'react'
import { Col, Row, Container, Alert } from 'react-bootstrap';
import { Envelope } from 'react-bootstrap-icons';
import VSpace from './VSpace';

const Footnote = (props) => {

    return (

        <div>
            {props.caption != '' && 
                <div>
                    <Container className="w-100" >
                        <Row className='justify-content-center'>
                            <Col 
                                sm={12} 
                                xs={12} 
                                md={12} 
                                xxl={12} 
                                className={`d-flex p-0 justify-content-center`}
                                style={{ 
                                    color: props.custom != null ? (props.custom.color != null ? props.custom.color : 'gray') : 'gray',
                                }}>
                                <div>{props.caption}</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </div>
        
        

    );

}

export default Footnote;