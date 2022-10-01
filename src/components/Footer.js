import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                <Col className="text-center">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/hari-dinesh-k-8345a6171"><img src={navIcon1} alt="LinkedIn Icon" /></a>
                            <a href="https://github.com/hariscodebase"><img src={navIcon2} alt="Github Icon" /></a>
                            <a href="mailto: haridinesh08@gmail.com"><img src={navIcon3} alt="Email Icon" /></a>
                        </div>
                        <p>Copyright 2022. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}