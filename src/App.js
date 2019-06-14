import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Containers/Login'


class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Login} />
        </>
      </Router>
    )
  }
}

export default App;
