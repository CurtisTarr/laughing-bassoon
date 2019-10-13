import React from 'react';
import './App.css';
import Posts from './components/Posts'
import Input from './components/Input'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <body>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Laughing Bassoon</Navbar.Brand>
      </Navbar>
      <Container style={{ padding: "10px" }}>
        <Jumbotron style={{ padding: "5px" }}>
          <Input />
        </Jumbotron>
        <Jumbotron style={{ padding: "5px" }}>
          <Posts />
        </Jumbotron>
      </Container>
    </body>
  );
}

export default App;
