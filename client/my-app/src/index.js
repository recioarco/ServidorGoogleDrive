import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

class Element extends React.Component {
  
}

class Directory extends React.Component {
    render() {
      return (
     <Container>
        <Row>
          <Col>HOLA K ASES</Col>
          <Col>JAJAJJA</Col>
        </Row>
        <Row>
          <Card>
            <Card.ImgOverlay src="holder.js/100px180" />
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card> 
        </Row>
      </Container>
      );
    }
  }

 // ==========================================
  
 ReactDOM.render(
    <Directory />,
    document.getElementById('root')
  );