import React from "react";
import "./App.css";
import { Card, Col, Container} from "react-bootstrap";
import Image from "./components/image";
import Price from "./components/price";
import Name from "./components/name";
import Description from "./components/description";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //{ fullName,bio, imgSrc, profession}
      fullName: "Ikeobodo Mathew",
      bio: "I am a software engineer",
      imgSrc: Image,
      profession: "Software Engineer",
      show: false,

    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ show: !this.state.show });
    }, 1000);
  }
render () {
return (
  <>
  <botton onClick={this.componentDidMount}>Toggle Show </botton>
  <di>
    <h1>i am {this.state.fullName}</h1>
    <h2>{this.state.bio}</h2>
    <h3>{this.state.profession}</h3>
    <img src={this.state.imgSrc} alt="myimage" />
  </di>
  </>
);
}
}
// function App(props) {
//   const firstName = props.firstName || "there";
//   return (
//     <>
//       <Container style={{display: 'flex'}} >
//         <Col lg={3}></Col>
//         <Col lg={6}>
//           <header style={{paddingBottom: '25px'}}>
//             <h4>My Product Card</h4>
//           </header>
//           <section>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" as= 'img' src= {Image} height={200} width={50}/>
//               <Card.Body>
//                 <Card.Title>My Product</Card.Title>
//                 <Card.Text>
//                   <p>
//                     Name: <Name />
//                   </p>
//                   <p>
//                     Price: <Price />
//                   </p>
//                   <p>
//                     Description: <Description />
//                   </p>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//             <p>hello {firstName}!</p>
//           </section>
//         </Col>
//         <Col lg={3}></Col>
//       </Container>
//     </>
//   );
// }

//export default App;
