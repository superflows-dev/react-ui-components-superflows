import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const LogoMast = (props) => {

    return (

        <Container>

            <Row className='justify-content-center'>
                <Col sm={6} xs={6} md={6} xxl={6}>
                    <img className='w-100 rounded-circle shadow-sm' src={props.imageUrl} alt={props.imageAlt}/>
                </Col>
            </Row>

        </Container>

    );

}

export default LogoMast;