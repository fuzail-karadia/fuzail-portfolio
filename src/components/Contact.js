/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { GitHub, LinkedIn, Instagram, RecentActorsRounded } from '@mui/icons-material';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import '../styles/ContactStyle.css';

function Contact() {
    return (
        <section className='contact-section' id='contact'>
            <Container fluid>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <h3 className='head'>Contact</h3>
                        <h1 className='title'>Get In Touch</h1>
                        <Col lg={5} className='mb-5 mb-lg-0'>
                            <div className='contact-left'>
                                <img src='/Images/contact.png' alt='Contact' className='img-fluid w-100 h-auto' />
                                <h1 className='head'>Fuzail Karadia</h1>
                                <p className='parah'>Front End Developer</p>
                                <p className='sub-parah'>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>

                                <div className='down'>
                                    <h3 className='head'>CONNECT WITH ME</h3>
                                    <a href='https://www.linkedin.com/in/fuzail-karadia-0a2935230/' target='_blank' rel='noreferrer'>
                                        <Button type='button' className='menu-btn'><LinkedIn /></Button>
                                    </a>
                                    <a href='https://github.com/fuzail-karadia/' target='_blank' rel='noreferrer'>
                                        <Button type='button' className='menu-btn'><GitHub /></Button>
                                    </a>
                                    <a href='https://www.instagram.com/fuzail.karadia/' target='_blank' rel='noreferrer'>
                                        <Button type='button' className='menu-btn'><Instagram /></Button>
                                    </a>
                                    <a href='/Fuzail.karadia.pdf' target='_blank' rel='noreferrer'>
                                        <Button type='button' className='menu-btn'><RecentActorsRounded /></Button>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} className='mb-5 mb-lg-0 mt-5 mt-lg-0'>
                            <div className='contact-right'>
                                <Form>
                                    <Row className='justify-content-center align-items-center'>
                                        <Col sm={6} lg={6} className='mb-3 mb-lg-0'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Your Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={6} lg={6} className='mb-3 mb-lg-0'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Your Mobile Number" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} className='mb-3 mb-lg-0'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Your Email" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} className='mb-3 mb-lg-0'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Subject</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Your Subject" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} className='mb-3 mb-lg-0'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control as="textarea" rows={5} placeholder="Enter Message" />
                                            </Form.Group>
                                        </Col>
                                        <Button type='button' className='btn-main'>Send Message</Button>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default Contact