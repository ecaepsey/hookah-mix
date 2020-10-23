import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header'
import TasteList from './components/TasteList'


const App =() => {
  return (
    <div className="App">
      <Header />
      <main>
        <h3 className="text-center pt-5" >Добро пожаловать в Mix</h3>
        <TasteList />
      </main>
      <Container>
        <Row>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
