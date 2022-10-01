import { Container, Row, Col, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import projects from '../content/projects.json';
import experiences from '../content/employments.json';
import educations from '../content/education.json';
import { ExperienceCard } from './ExperienceCard';
import { ProjectCard } from './ProjectCard';
import { EducationCard } from './EducationCard';


export const Projects = () => {
    
    return (
        <section className='experiences' id='experiences'>
            <Container>
                <Row>
                    <Col>
                    <h2>Education and Experiences</h2>
                    <Tab.Container id='project-tabs' defaultActiveKey="projects">
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="projects">Projects</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="work-experience">Work Experience</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="education">Education</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content>
                        <Tab.Pane eventKey="projects">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index} {...project} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="work-experience">
                            <Row>
                                {
                                    experiences.map((experience, index) => {
                                        return (
                                            <ExperienceCard key={index} {...experience} />
                                        )
                                    })
                                }
                            </Row>
                            
                        </Tab.Pane>
                        <Tab.Pane eventKey="education">
                            <Row>
                                {
                                    educations.map((education, index) => {
                                        return (
                                            <EducationCard key={index} {...education} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}