import React from "react";
import "./App.css";
import { Card, Col, Container} from "react-bootstrap";
import Image from "./components/image";
import Price from "./components/price";
import Name from "./components/name";
import Description from "./components/description";

function App(props) {
  const firstName = props.firstName || "there";
  return (
    <>
      <Container style={{display: 'flex'}} >
        <Col lg={3}></Col>
        <Col lg={6}>
          <header style={{paddingBottom: '25px'}}>
            <h4>My Product Card</h4>
          </header>
          <section>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" as= 'img' src= {Image} height={200} width={50}/>
              <Card.Body>
                <Card.Title>My Product</Card.Title>
                <Card.Text>
                  <p>
                    Name: <Name />
                  </p>
                  <p>
                    Price: <Price />
                  </p>
                  <p>
                    Description: <Description />
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <p>hello {firstName}!</p>
          </section>
        </Col>
        <Col lg={3}></Col>
      </Container>
    </>
  );
}

export default App;
