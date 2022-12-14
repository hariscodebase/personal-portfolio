import { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    
    return (
    <Navbar expand="md" className={ scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')} >Experiences</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/hari-dinesh-k-8345a6171"><img src={navIcon1} alt="LinkedIn Icon" /></a>
              <a href="https://github.com/hariscodebase"><img src={navIcon2} alt="Github Icon" /></a>
              <a href="mailto: haridinesh08@gmail.com"><img src={navIcon3} alt="Email Icon" /></a>
            </div>
            <a href="#connect"><button className='vvd' onClick={() => onUpdateActiveLink('connect')}><span>Lets's Connect</span></button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}