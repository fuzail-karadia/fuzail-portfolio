/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../styles/ProjectStyle.css';

function Projects() {
    return (
        <section className='project-section' id='projects'>
            <Container className='h-full'>
                <Row>
                    <h3 className='head'>Projects</h3>
                    <h1 className='title'>What I've Built</h1>
                    <Col lg={6} className='mb-3 mb-lg-0 mt-3 mt-lg-0 overlay'>
                        <img src='/Images/utpan.png' alt='Utpan' className='img-fluid w-100 h-auto' />
                        <div className='layer'>
                            <h3>Utpan</h3>
                            <h5>HTML, CSS, BOOTSTRAP</h5>
                            <div className='buttons'>
                                <a href='https://github.com/fuzail-karadia/Utpan.git' target='_blank' rel='noreferrer'>
                                    <Button className='btn-main'>Code</Button>
                                </a>
                                <a href='https://utpan.vercel.app/' target='_blank' rel='noreferrer'>
                                    <Button className='btn-main'>Demo</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mb-3 mb-lg-0 mt-3 mt-lg-0 overlay'>
                        <img src='/Images/Eduford.png' alt='Eduford' className='img-fluid' />
                        <div className='layer'>
                            <h3>Eduford</h3>
                            <h5>HTML, CSS, BOOTSTRAP</h5>
                            <div className='buttons'>
                                <a href='https://github.com/fuzail-karadia/Eduford.git' target='_blank' rel='noreferrer'>
                                    <Button className='btn-main'>Code</Button>
                                </a>
                                <a href='https://eduford-university-tawny.vercel.app/' target='_blank' rel='noreferrer'>
                                    <Button className='btn-main'>Demo</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mb-3 mb-lg-0 mt-3 mt-lg-3 overlay'>
                        <img src='/Images/Foodies.png' alt='Foodies' className='img-fluid' />
                        <div className='layer'>
                            <h3>Foodies</h3>
                            <h5>HTML, CSS, BOOTSTRAP</h5>
                            <div className='buttons'>
                                <a href='https://github.com/fuzail-karadia/Foodies' target='_blank' rel='noreferrer'>
                                    <Button className='btn-main'>Code</Button>
                                </a>
                                <a href='https://foodiesrestaurant.vercel.app/' target='_blank' rel='noreferrer'>
                                    <Button className='btn-main'>Demo</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Projects;