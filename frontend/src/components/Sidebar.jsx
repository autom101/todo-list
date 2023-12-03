import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../assets/x-symbol.svg";

const Sidebar = () => {
  return (
    <Container className="pt-3">
      <Row className="mb-5">
        <Col>
          <img
            className="img-fluid border rounded-circle w-50"
            src={pic}
            alt="A placeholder for now"
          />
        </Col>
        <Col>Person</Col>
      </Row>
      <Row>Today</Row>
      <Row>Projects</Row>
    </Container>
  );
};

export default Sidebar;
