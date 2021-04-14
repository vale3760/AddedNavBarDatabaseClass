
import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Trend_1 from './components/Trend_1';
import Trend_2 from './components/Trend_2';
import Trend_3 from './components/Trend_3';
import Trend_4 from './components/Trend_4';
import Trend_5 from './components/Trend_5';
import {HashRouter, Route, Switch} from 'react-router-dom'

class App extends Component {

  render(){
    return(
      <div className="App"> 
        <Navigation />
        <HashRouter>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Trend_1}></Route>
            <Route exact path='/Trend2' component={Trend_2}></Route>
            <Route exact path='/Trend3' component={Trend_3}></Route>
            <Route exact path='/Trend4' component={Trend_4}></Route>
            <Route exact path='/Trend5' component={Trend_5}></Route>
          </Switch>
        </div>
        </HashRouter>
      </div>
      
      )
  }
}

export default App;







    //   <Container>
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Welcome to the Database Systems Influenza Web App</h1>

    //         <Form>
    //             <Form.Group controlId={"formBasicUsername"}>
    //                 <Row>
    //                 <Form.Label>Username</Form.Label>
    //                 </Row>
    //                 <Form.Control type="text" placeholder="Enter username" />

    //             </Form.Group>
    //             <Form.Group controlId={"formBasicPassword"}>
    //                 <Row>
    //                 <Form.Label>Password</Form.Label>
    //                 </Row>
    //                 <Form.Control type="password" placeholder="Password" />

    //             </Form.Group>
    //             <Button variant="primary" type="submit">
    //                 Submit
    //             </Button>
    //         </Form>


    //   </header>
    // </div>
    //   </Container>
  
