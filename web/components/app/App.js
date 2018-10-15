import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

// Containers
import Home from '../home/Home';
import Navbar from '../../containers/navbar';

// Components
import NotFound from '../errors/NotFound';

class App extends React.Component {
  render() {
    const { base } = this.props;

    return (
      <BrowserRouter basename={base}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page_not_found" component={NotFound} />
            <Route component={() => <Redirect to="/page_not_found" />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

App.propTypes = {
  base: PropTypes.string,
};
