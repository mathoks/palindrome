import React from "react";
import "./App.css";
import { Card, Col, Container} from "react-bootstrap";
import Image from "./components/image";
import Price from "./components/price";
import Name from "./components/name";
import Description from "./components/description";
import { PlayerList } from "./components/playerList";

function App(props) {
  return (
    <>
      <Container style={{display: 'flex'}} >
        <Col lg={3}></Col>
        <Col lg={6}>
          <header style={{paddingBottom: '25px'}}>
            <h4>My Player Card</h4>
          </header>
          <section>
          <PlayerList/>
          </section>
        </Col>
        <Col lg={3}></Col>
      </Container>
    </>
  );
}

export default App;
