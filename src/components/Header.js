import React, { useState } from "react";
import styled from "styled-components";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/HeaderStyle.css';
import { Link } from 'react-scroll';


const Header = () => {

  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""} `}>
        <Container className=''>
          <Navbar.Brand href="https://fuzailkaradia.vercel.app/" target="_self">
            <img src='/Images/logo.png' alt='logo' className='img-fluid' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 align-items-center text-uppercase"
              navbarScroll
            >
              <Nav.Link className='nav-menu'><Link to="home" spy={true} smooth={true} offset={0} duration={100}>Home</Link></Nav.Link>
              <Nav.Link className='nav-menu'><Link to="about" spy={true} smooth={true} offset={0} duration={100}>About</Link></Nav.Link>
              <Nav.Link className='nav-menu'><Link to="skills" spy={true} smooth={true} offset={0} duration={100}>Skills</Link></Nav.Link>
              <Nav.Link className='nav-menu'><Link to="projects" spy={true} smooth={true} offset={0} duration={100}>Projects</Link></Nav.Link>
              <Nav.Link className='nav-menu'><Link to="contact" spy={true} smooth={true} offset={0} duration={100}>Contact</Link></Nav.Link>
              <a href='/fuzail.karadia.pdf' target='_blank' rel='noreferrer'><Button className='btn-main'>Resume</Button></a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </header>
  );
};

const Button = styled.button``;

// const Container = Styled.div``;

// const SubContainer = Styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Nav = Styled.div`
//   height: 80px;
//   width: 100%;
//   position: fixed;
//   background-color: #ECF0F3;
//   // box-shadow: 0 10px 10px #c9c9c9;
//   z-index: 1;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media(max-width: 575px) {
//     // height: 60px;
//     width: 100%;
//   }

//   button {
//     @media (max-width: 575px) {

//     }
//   }
// `;

// const Logo = Styled.img`
//   height: 50px;
//   cursor: pointer;

//   @media (max-width: 575px) {
//     padding-left: 50px;
//     // height: 40px;
//   }

//   @media (max-width: 425px) {
//     padding-left: 25px;
//     height: 40px;
//   }
// `;

// const NavMenu = Styled.div`

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   a {
//     padding: 0 8px;
//     display: flex;
//     text-decoration: none;

//     Button:hover {
//       background-color: #6A994E;
//       border: 2px solid #6A994E;
//       color: #ECF0F3;
//       transition: .3s
//     }

//     span {
//       color: #434343;
//       letter-spacing: .3px;
//       text-decoration: none;
//       cursor: pointer;
//       font-size: 16px;
//       text-transform: uppercase;
//     }

//     span:hover {
//       transition: 0.3s;
//       color: #6A994E;
//     }
//   }

//   @media (max-width: 575px) {
//     Link {
//       display: none;
//     }
//   }

//   @media (max-width: 425px) {
//     display: none;
//   }
// `;

// const Button = Styled.button`
// padding: 9px 18px;
// color: #6A994E;
// background-color: transparent;
// border: 2px solid #6A994E;
// border-radius: 5px;
// font-size: 16px;
// text-transform: uppercase;
// cursor: pointer;
// box-shadow: 5px 5px 10px rgb(21 230 76 / 26%);
// font-family: 'Poppins', sans-serif;
// `;


export default Header;