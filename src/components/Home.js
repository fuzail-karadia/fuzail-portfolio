/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Button from 'react-bootstrap/Button';
import { GitHub, LinkedIn, MailOutlineRounded, RecentActorsRounded } from '@mui/icons-material';
import '../styles/HomeStyle.css';
import { Container, Row, } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Home() {
  return (

    <section className='hero-section' id='home'>
      <Container fluid className='h-full'>
        <Container>
          <Row className='justify-content-center align-items-center text-center'>
            
              <p className='mini-parah'>Let's Build Something Together</p>
              <h1 className='head'>Hi, i'm Fuzail<br></br>A <span>Front-End Web Developer.</span></h1>
              <p className='parah'>I’m focused on building responsive front-end web applications while learning back-end technologies.</p>
            
          </Row>
          <Row>
            <div className='btn-grp'>
              <a href='https://www.linkedin.com/in/fuzail-karadia-0a2935230/' target='_blank' rel='noreferrer'>
                <Button type='button' className='menu-btn'><LinkedIn className='linkedin' /></Button>
              </a>
              <a href='https://github.com/fuzail-karadia/' target='_blank' rel='noreferrer'>
                <Button type='button' className='menu-btn'><GitHub className='github' /></Button>
              </a>
              <a>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={100}>
                  <Button type='button' className='menu-btn'><MailOutlineRounded className='mail' /></Button>
                </Link>
              </a>
              <a href='/Fuzail.karadia.pdf' target='_blank' rel='noreferrer'>
                <Button type='button' className='menu-btn'><RecentActorsRounded className='actor' /></Button>
              </a>
            </div>
          </Row>
        </Container>
      </Container>
    </section>

  )
};

export default Home;