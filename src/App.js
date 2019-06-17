import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Containers/Login'
import Home from './Components/Containers/Home'


class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Login} />
          <Route exact path="/Login" component={Login} />
          <Route path="/Home" component={Home} />
        </>
      </Router>
    )
  }
}

export default App;
