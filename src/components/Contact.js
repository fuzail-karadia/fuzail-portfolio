/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { GitHub, LinkedIn, Instagram, RecentActorsRounded } from '@mui/icons-material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import '../styles/ContactStyle.css';
import { Link } from 'react-scroll';

function Contact() {
    return (
        <section className='contact-section' id='contact'>
            <Container fluid>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <h3 className='head'>Contact</h3>
                        <h1 className='title'>Get In Touch</h1>
                        <Col lg={5} className='mb-3 mb-lg-0'>
                            <div className='contact-left'>
                                <img src='/Images/contact.png' alt='Contact' className='img-fluid w-100 h-auto' />
                                <h1 className='head'>Fuzail Karadia</h1>
                                <p className='parah'>Front End Developer</p>
                                <p className='sub-parah'>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>

                                <div className='down'>
                                    <h3 className='head'>CONNECT WITH ME</h3>
                                    <div className='btn-group'>
                                        <a href='https://www.linkedin.com/in/abdullah-jagrala-789234280/' target='_blank' rel='noreferrer'>
                                            <Button type='button' className='menu-btn'><LinkedIn /></Button>
                                        </a>
                                        <a href='https://github.com/Abdullah8007' target='_blank' rel='noreferrer'>
                                            <Button type='button' className='menu-btn'><GitHub /></Button>
                                        </a>
                                        <a href='https://www.instagram.com/a_jagrala_007/' target='_blank' rel='noreferrer'>
                                            <Button type='button' className='menu-btn'><Instagram /></Button>
                                        </a>
                                        <a href='/Resume.pdf' target='_blank' rel='noreferrer'>
                                            <Button type='button' className='menu-btn'><RecentActorsRounded /></Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} className='mb-3 mb-lg-0 mt-3 mt-lg-0'>
                            <div className='contact-right'>
                                <Form>
                                    <Row className='justify-content-center align-items-center'>
                                        <Col sm={6} lg={6} className='mb-3 mb-lg-0'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={6} lg={6} className='mb-3 mb-lg-0'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} className='mb-3 mb-lg-0'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} className='mb-3 mb-lg-0'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Subject</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} className='mb-3 mb-lg-0'>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control as="textarea" rows={5} />
                                            </Form.Group>
                                        </Col>
                                        <Button type='button' className='btn-main'>Send Message</Button>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row className='last-btn'>
                        <Button className='to-top-btn'>
                            <Link to="home" spy={true} smooth={true} offset={0} duration={100}><KeyboardDoubleArrowUpIcon /></Link>
                        </Button>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default Contact