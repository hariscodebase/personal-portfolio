import {Card, Col} from "react-bootstrap";

export const EducationCard = ({title, program, college, startdate, enddate}) => {
    function getMonthYear(date) {
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let current_datetime = new Date(date);
        let formatted_date = months[current_datetime.getMonth()] + " " + current_datetime.getFullYear();
        return formatted_date;
    }
    return (
        <Col sm={12} md={6}>
            <Card bg="dark"
                    key="Dark"
                    text="white"
                    className="mb-2 exp-card">
              <Card.Header>{title}</Card.Header>
              <Card.Body>
                <Card.Text>{college}</Card.Text>
                <Card.Title>{program}</Card.Title>                
                <Card.Subtitle>{ '( ' + getMonthYear(startdate) + ' - ' + getMonthYear(enddate) + ' )'}</Card.Subtitle>
              </Card.Body>
            </Card>
        </Col>
    )
}