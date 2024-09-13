import Container from "react-bootstrap/Container";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
function MainPageNavbar({ setlang1, setsearchterm, setcategory }) {
  const [cat, setcat] = useState("General");
  const [lang, setlang] = useState("English");
  useEffect(() => {
    setlang1(lang);
    setcategory(cat);
  }, [lang, cat]);

  return (
    <Navbar
      expand="lg"
      bg="dark"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Tooltip id="my-tooltip" />
      <Tooltip id="my-tooltip1" style={{ zIndex: "1000" }} />
      <Container>
        <Navbar.Brand href="#home">News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Form inline>
          <Row style={{ alignItems: "center" }}>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    // console.log("hello",e.target.value)
                    setsearchterm(e.target.value); // Set search term on Enter key press
                  }
                }}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="after entering text please click on enter"
                data-tooltip-place="left"
              />
            </Col>

            <Col xs="auto">
              <NavDropdown
                title={cat}
                id="basic-nav-dropdown"
                className=" mr-sm-2"
                style={{ color: "white" }}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => {
                    setcat("General");
                  }}
                >
                  General
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={() => {
                    setcat("World");
                  }}
                >
                  World
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={() => {
                    setcat("business");
                  }}
                >
                  business
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Col>
            <Col xs="auto">
              <NavDropdown
                title={lang}
                id="basic-nav-dropdown"
                className=" mr-sm-2"
                style={{ color: "white" }}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => {
                    setlang("English");
                  }}
                >
                  English
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="No data Available with this language"
                  data-tooltip-place="right"
                  onClick={() => {
                    setlang("Hindi");
                  }}
                >
                  Hindi
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  data-tooltip-id="my-tooltip1"
                  data-tooltip-content="No data Available with this language"
                  data-tooltip-place="right"
                  onClick={() => {
                    setlang("Telugu");
                  }}
                >
                  Telugu
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Col>
            {/* <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col> */}
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

export default MainPageNavbar;
