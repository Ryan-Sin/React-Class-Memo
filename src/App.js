import React, { Component } from 'react';
import List from './components/List';
import Input from './components/Input';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const style = {

  MainContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: '30px',
    overflow: 'hidden',
    minHeight: "100vh",
  },

  BodyContainer: {
    width:"80%",
  },

  Title: {
    textAlign: "center",
    border: "1px solid gray",
  },

  Body: {
    display: "flex",
    height: "100%"
  },

}


class App extends Component {
  
  render() {
    return (
         <Container style={{marginTop: '30px'}}>
           <Row className="justify-content-center">
            <div style={style.BodyContainer}>
              <h1 style={style.Title}>React Class Memo Project</h1>
                <div style={style.Body}>
                    <List/>
                    <Input/>
                </div>
            </div>
          </Row>
         </Container>
    );
  }
}

export default App;