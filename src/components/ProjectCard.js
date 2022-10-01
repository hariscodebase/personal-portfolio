import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({title, description, imgUrl, url, githubUrl, usedskills }) => {
    return (
        <Col sm={12} md={6}>
            <div className="proj-imgbx">
                <img src={require("../assets/img/" + imgUrl)} alt="Project Home Page" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>{usedskills}</p>
                    <div className="proj-btns">
                        <a href={url} target="_blank"><Button size="lg" variant="primary">Live</Button></a>
                        <a href={githubUrl} target="_blank"><Button size="lg" variant="dark">Github</Button></a>
                    </div>
                    
                </div>                
                
            </div>
        </Col>
    )
}