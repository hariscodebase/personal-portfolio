import { Card, Col } from "react-bootstrap";

export const ExperienceCard = ({companyName, title, description, startDate, endDate}) => {
    function getMonthYear(date) {
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let current_datetime = new Date(date);
        let formatted_date = months[current_datetime.getMonth()] + " " + current_datetime.getFullYear();
        return formatted_date;
    }

    return (
        <Col sm={12} md={4}>
            <Card bg="dark"
                    key="Dark"
                    text="white"
                    className="mb-2 exp-card"
                    style={{height: "250px"}}>
              <Card.Header>{title}</Card.Header>
              <Card.Body>
                <Card.Title>{companyName}</Card.Title>
                <Card.Subtitle>{ '( ' + getMonthYear(startDate) + ' - ' + getMonthYear(endDate) + ' )'}</Card.Subtitle>
                <Card.Text className="mt-4">
                  {description}
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
    )
}