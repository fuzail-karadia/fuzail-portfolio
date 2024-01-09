/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AboutStyle.css';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section className='about-section' id='about'>
      <Container className='h-full'>
        <Container>
          <Row className='justify-content-center align-items-center'>
            <h3 className='head'>About</h3>
            <h1 className='title'>Who I Am</h1>
            <Col lg={5} className='mb-5 mb-lg-0'>
              <img src='/Images/about-img.png' alt='About-Img' className='img-fluid' />
            </Col>
            <Col lg={7} className='mb-5 mb-lg-0'>
              <p className='parah'>
                Hi there!, I’m Abdullah, a curious frontend developer who’s trying to get a bit better every day.
                <br></br><br></br>
                I currently studying in S.Y.BCA from Tilak Maharashtra Vidyapeeth, Pune.
                <br></br><br></br>
                I have always had a knack for technology and working with computers. Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning JavaScript and was even more enthused with making websites interactive.
                <br></br><br></br>
                I’m very dedicated to learn new things and to truly believe that you should never stop learning. I enjoy creating different things, whether that be websites, application or anything in between.
                <br></br><br></br>
                I’m always looking for new opportunities to expand my understanding of web design and development, so you’ll generally find me sipping a delicious cup of coffee with my nose in a good “technical” book or plugged into my laptop drooling over all of the beauty the web has to offer. I hope to join a team of talented individuals I can learn from and build engaging digital experiences with.
                <br></br><br></br>
                <a href=''>Check out some of my latest projects</a>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
};

// const Container = styled.div`
//     height: 100vh;
//     display: flex;
//     // justify-content: space-between;
//     align-items: center;
//     background-color: #ECF0F3;

//     .img:hover {
//       transform: scale(1.05, 1.05);
//   }
// `;

// const AboutMe = styled.div``;

// const Row = styled.div`

// `;

// const SubContainer = styled.div``;

// const Title = styled.div`
//   font-size: 20px;
//   text-transform: uppercase;
//   color: #6A994E;
//   letter-spacing: 1px;
// `;

// const Head = styled.div`
//   font-size: 32px;
//   padding: 16px 0;
//   font-weight: 700;
//   letter-spacing: 1px;
// `;

// const Para = styled.div`
//   font-size: 16px;
//   line-height: 22px;
//   letter-spacing: 1px;

//   a {
//     color: #434343;
//   }
// `;

// const Image = styled.img`
//   // width: 500px;
//   // height: auto;
//   border: 10px solid #fff;
//   border-radius: 10px;
//   box-shadow: 0 10px 10px #B0B6C0;
//   transition: .5s;

//   @media (max-width: 1024px) {
//     // width: 400px;
//     height: auto;
//   }

//   @media (max-width: 768px) {
//     width: 300px;
//     height: auto;
//   }
// `;

export default About;