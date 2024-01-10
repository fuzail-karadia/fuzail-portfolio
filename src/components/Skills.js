import React from 'react'
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SkillsStyle.css';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        // <Container className='Container-fluid' id='skills'>
        //     <SubContainer className='Container'>
        //         <Title>Skills</Title>
        //         <Head className=' mb-5'>What I Can Do</Head>
        //         <Sgroup className='d-flex flex-lg-wrap flex-md-wrap flex-sm-wrap row-gap-5 column-gap-5 justify-content-evenly'>
        //             <Sbox className='d-flex align-items-center justify-content-evenly col-lg-4'>
        // <Logo src='./Images/html.webp' alt=''></Logo>
        // <Cont>HTML5</Cont>
        //             </Sbox>

        //             <Sbox className='d-flex align-items-center justify-content-evenly'>
        //                 <Logo src='./Images/css.png' alt=''></Logo>
        //                 <Cont>CSS3</Cont>
        //             </Sbox>

        //             <Sbox className='d-flex align-items-center justify-content-evenly'>
        //                 <Logo src='./Images/javascript.webp' alt='' className=' align-items-center justify-content-center'></Logo>
        //                 <Cont className=' align-items-center justify-content-center'>JavaScript</Cont>
        //             </Sbox>

        //             <Sbox className='d-flex align-items-center justify-content-evenly'>
        //                 <Logo src='./Images/react.png' alt=''></Logo>
        //                 <Cont>React</Cont>
        //             </Sbox>

        //             <Sbox className='d-flex align-items-center justify-content-evenly'>
        //                 <Logo src='./Images/bootstrap.png' alt='' className=' align-items-center justify-content-center'></Logo>
        //                 <Cont>Bootstrap5</Cont>
        //             </Sbox>

        //             <Sbox className='d-flex align-items-center justify-content-evenly'>
        //                 <Logo src='./Images/github1.webp' alt='' className=' align-items-center justify-content-center'></Logo>
        //                 <Cont>Github</Cont>
        //             </Sbox>
        //         </Sgroup>
        //     </SubContainer>
        // </Container>
        <section className='skill-section' id='skills'>
            <Container fluid className='h-full'>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <h3 className='head'>Skills</h3>
                        <h1 className='title'>Who I Am</h1>
                        <Col md={6} lg={4} className='mb-5 mb-lg-0 mt-5 mt-lg-0'>
                            <div className='skill-menu'>
                                <img src='/Images/html.webp' alt='About-Img' className='img-fluid' />
                                <h4>HTML5</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-5 mb-lg-0 mt-5 mt-lg-0'>
                            <div className='skill-menu'>
                                <img src='/Images/css.png' alt='About-Img' className='img-fluid' />
                                <h4>CSS3</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-5 mb-lg-0 mt-5 mt-lg-0'>
                            <div className='skill-menu'>
                                <img src='/Images/javascript.webp' alt='About-Img' className='img-fluid' />
                                <h4>JAVASCRIPT</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-5 mb-lg-0 mt-5'>
                            <div className='skill-menu'>
                                <img src='/Images/react.png' alt='About-Img' className='img-fluid' />
                                <h4>REACT</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-5 mb-lg-0 mt-5'>
                            <div className='skill-menu'>
                                <img src='/Images/bootstrap.png' alt='About-Img' className='img-fluid' />
                                <h4>BOOTSTRAP5</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-5 mb-lg-0 mt-5'>
                            <div className='skill-menu'>
                                <img src='/Images/github1.webp' alt='About-Img' className='img-fluid' />
                                <h4>GITHUB</h4>
                            </div>
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
//     justify-content: center;
//     // background-color: #ECF0F3;
//     background: linear-gradient(90deg, #effaff 0%, #d9e7ff 100%);
//     padding: 0px;
//     flex-direction: column;
//     text-align; left;

//     @media (max-width: 767px) {
//         padding-top: 20rem;
//         paddig-bottom: 0;
//     }
// `;

// const Title = styled.div`
//     font-size: 20px;
//     text-transform: uppercase;
//     color: #17CF97;
//     letter-spacing: 1px;
// `;

// const Head = styled.div`
//     font-size: 32px;
//     padding: 16px 0;
//     font-weight: 700;
//     letter-spacing: 1px;
// `;

// const Sgroup = styled.colgroup`
//     :hover {
//         transform: scale(1.1, 1.1);
//     }

//     @media(max-width: 575px) {
//         flex-wrap: wrap;
//     }
// `;

// const SubContainer = styled.div`

// `;

// const Sbox = styled.div`
// border: 0px solid #ECF0F3;
// background-color: transparent;
// box-shadow: 0 10px 10px #B0B6C0;
// border-radius: 10px;
// padding: 10px;
// width: 300px;
// transition: .3s;
// cursor: pointer;

//     @media(max-width: 575px) {
//         width: 200px;
//         flex-basis: 100%;
//     }

//     @media(max-width: 425px) {
//         flex-basis: 100%;
//     }
// `;

// const Logo = styled.img`
//     transition: .3s;
//     position: relative;

//     @media(max-width: 575px) {
//         padding: 0 10px;
//     }
// `;

// const Cont = styled.div`
//     font-size: 18px;
//     font-weight: 500;
//     transition: .3s;

//     @media(max-width: 575px) {
//         padding: 0 10px;
//     }
// `;

export default Skills;