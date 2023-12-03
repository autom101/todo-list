import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components";

function App() {
  return (
    <Router>
      <Container className="vh-100 vw-100 m-0">
        <Row className="h-100">
          <Col className="col-md-3 border h-100">
            <Sidebar></Sidebar>
          </Col>
          <Col>
            <Routes>
              <Route path="/" />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
