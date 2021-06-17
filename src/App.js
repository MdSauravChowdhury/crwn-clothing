import React from 'react';
import HomePage from './components/pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'

const HatPage = (props) => {
  return (
    <div>
        <button onClick={() => props.history.push('/')}>Hats</button>

      <h1>this is hat pages</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/hats' component={HatPage}/>          
        </Switch>
    </div>
  );
}

export default App;
