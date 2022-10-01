import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import developerImg from "../assets/img/developer.svg";
import resume from "../content/Resume.pdf";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hi, I'm Hari Dinesh</h1>
                        <h2>Full stack developer</h2>
                        <p>Welcome to my portfolio! I'm a full-stack developer based in Ontario with some good amount of work experience. I love to build quality web applications with a long term vision. Apart from coding, I love nature, music, football and friends. if you are looking for a full stack developer or software engineer, please feel free to reach out!</p>
                        <button onClick={() => window.location="#connect"}>Let's connect <ArrowRightCircle size={25}/></button>
                        <a className="resume-btn" href={resume} download><Button variant="dark">Resume</Button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={developerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}