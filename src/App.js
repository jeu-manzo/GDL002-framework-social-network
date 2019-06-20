import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Containers/Login'
import Home from './Components/Containers/Home'


class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App;
