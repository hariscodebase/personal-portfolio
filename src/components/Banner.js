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
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>I'm Hari</h1>
                        <h2></h2>
                        <p>A Full Stack Developer with 8+ years of experience building scalable applications using .NET Core, C#, React, SQL Server, and Azure. I specialize in developing end-to-end solutions—from designing APIs and optimizing databases to creating responsive UIs and deploying cloud-native applications. As a <a href="https://learn.microsoft.com/en-ca/users/HariDineshKrishnamurthy-3635/credentials/259BD18E566E5FF6">Microsoft Certified: Azure AI Engineer Associate</a>, I’m passionate about integrating AI-powered automation into modern software to improve efficiency and user experience.</p>
                        {/* <button onClick={() => window.location="#connect"}>Let's connect <ArrowRightCircle size={25}/></button> */}
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