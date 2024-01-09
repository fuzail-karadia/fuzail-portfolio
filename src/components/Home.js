/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Button from 'react-bootstrap/Button';
import { GitHub, LinkedIn, MailOutlineRounded, RecentActorsRounded } from '@mui/icons-material';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomeStyle.css';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    // <Container className=' container-fluid' id='home'>
    //   <p>Let's Build Something Together</p>
    //   <Hero>
    //     <h1>Hi, i'm Fuzail<br></br>A <span>Front-End Web Developer.</span></h1>
    //     <Para>I’m focused on building responsive front-end web applications while learning back-end technologies.</Para>
    // <a href='https://www.linkedin.com/in/fuzail-karadia-0a2935230/' target='_blank' rel='noreferrer'>
    //   <Button type='button'><LinkedIn /></Button>
    // </a>
    // <a href='https://github.com/fuzail-karadia/' target='_blank' rel='noreferrer'>
    //   <Button type='button'><GitHub /></Button>
    // </a>
    // <a>
    //   <Button type='button'><MailOutlineRounded /></Button>
    // </a>
    // <a href='/Fuzail.karadia.pdf' target='_blank' rel='noreferrer'>
    //   <Button type='button'><RecentActorsRounded /></Button>
    // </a>
    //   </Hero>
    // </Container >

    <section ClassName='home-section' id='home'>
      <Container fluid className='h-full'>
        <Container>
          <Row className='justify-content-center align-items-center text-center'>
            <Col lg={12}>
              <p>Let's Build Something Together</p>
              <h1>Hi, i'm Fuzail<br></br>A <span>Front-End Web Developer.</span></h1>
              <p>I’m focused on building responsive front-end web applications while learning back-end technologies.</p>
              <a href='https://www.linkedin.com/in/fuzail-karadia-0a2935230/' target='_blank' rel='noreferrer'>
                <Button type='button'><LinkedIn /></Button>
              </a>
              <a href='https://github.com/fuzail-karadia/' target='_blank' rel='noreferrer'>
                <Button type='button'><GitHub /></Button>
              </a>
              <a>
                <Button type='button'><MailOutlineRounded /></Button>
              </a>
              <a href='/Fuzail.karadia.pdf' target='_blank' rel='noreferrer'>
                <Button type='button'><RecentActorsRounded /></Button>
              </a>
            </Col>
          </Row>
          {/* <Row className='justify-content-center align-items-center text-center'>
            <Col lg={12}>
              <a href='https://www.linkedin.com/in/fuzail-karadia-0a2935230/' target='_blank' rel='noreferrer'>
                <Button type='button'><LinkedIn /></Button>
              </a>
              <a href='https://github.com/fuzail-karadia/' target='_blank' rel='noreferrer'>
                <Button type='button'><GitHub /></Button>
              </a>
              <a>
                <Button type='button'><MailOutlineRounded /></Button>
              </a>
              <a href='/Fuzail.karadia.pdf' target='_blank' rel='noreferrer'>
                <Button type='button'><RecentActorsRounded /></Button>
              </a>
            </Col>
          </Row> */}
        </Container>
      </Container>
    </section>

  )
};

// const Button = styled.button``;

// const Container = styled.div`
// text-align: center;
// flex-direction: column;
// // background-color: #ECF0F3;
// background: linear-gradient(90deg, #effaff 0%, #d9e7ff 100%);
// // padding: 350px 0;
// height: 100vh;
// display: flex;
// align-items: center;
// justify-content: center;

//   p {
//     font-size: 18px;
//     text-transform: uppercase;
//     margin-bottom: 5px;
//     letter-spacing: 1px;

//     @media(max-width: 768px) {
//       font-size: 16px;
//     }
//     @media(max-width: 320px) {
//       font-size: 13px;
//     }
//   }
// `;

// const Hero = styled.div`
//   a {
//     Button:hover {
//       transform: scale(1.2, 1.2);

//     }
//   }

//   h1 {
//     font-size: 50px;
//     margin-top: 5px;
//     margin-bottom: 5px;
//     text-transform: uppercase;
//     font-weight: bolder;
//     color: #434343;
//     letter-spacing: 1px;
//     font-weight: 700;

//     @media(max-width: 768px) {
//       font-size: 45px;
//     }


//     @media(max-width: 712px) {
//       font-size: 40px;
//     }

//     @media(max-width: 320px) {
//       font-size: 17px;
//     }

//     span {
//       color: transparent;
//       background-image: linear-gradient(#17CF97, #17CF97);
//       background-repeat: no-repeat;
//       -webkit-background-clip: text;
//       background-position: -775px 0;
//       animation: backcolor 4s linear infinite alternate;

//       @keyframes backcolor {
//         100% {
//           background-position: 0 0;
//         }
//       }
//     }
//   }
// `;

// const Para = styled.div`
//   max-width: 600px;
//   margin: auto;
//   margin-bottom: 10px;
//   // letter-spacing: 1px;
//   line-height: 23px;
//   font-size: 18px;
//   text-transform: uppercase;
//   letter-spacing: 1px;

//   @media(max-width: 768px) {
//     font-size: 16px;
//   }
//   @media(max-width: 320px) {
//     font-size: 13px;
//     line-height: 18px;
//   }
// `;
// const Button = styled.button`
//   padding: 18px 20px;
//   margin: 0 10px;
//   border: 0px solid #fff;
//   border-radius: 50%;
//   background-color: transparent;
//   box-shadow: 0 10px 10px #B0B6C0;
//   margin-top: 20px;
//   cursor: pointer;
//   transition: .3s;

//   @media (max-width: 320px) {
//     margin: 0 5px;
//   }
// `;

export default Home;