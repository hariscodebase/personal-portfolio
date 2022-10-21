import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faCodepen, faReact, faBootstrap, faNodeJs, faGit  } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faComputer, faTools } from '@fortawesome/free-solid-svg-icons';


export const Skills = () => {

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            
                            <div className="skill-list">
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faHtml5} />
                                    <h5>HTML</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faCss3} />
                                    <h5>CSS</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faJs} />
                                    <h5>JS</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faCodepen} />
                                    <h5>ASP .NET</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faCode} />
                                    <h5>C#</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faReact} />
                                    <h5>React JS</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faBootstrap} />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faNodeJs} />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faCodepen} />
                                    <h5>MVC</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faDatabase} />
                                    <h5>SQL</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faGit} />
                                    <h5>GIT</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faComputer} />
                                    <h5>Azure DevOps</h5>
                                </div>
                                <div className="skill-item">
                                <FontAwesomeIcon icon={faTools} />
                                    <h5>Selenium</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}