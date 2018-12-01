import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';

// Containers
// import Home from '../home/Home';
import LocalHackDay from '../local-hack-day/index';
import Navbar from '../../containers/navbar';

// Components
import NotFound from '../errors/NotFound';

class App extends React.Component {
  render() {
    const { base } = this.props;

    return (
      <HashRouter basename={base}>
        <div>
          <Navbar />
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={() => window.location = 'https://nwplus.io/#/localhackday'} />
            <Route exact path="/localhackday" component={LocalHackDay} />
            <Route path="/page_not_found" component={NotFound} />
            <Route component={() => <Redirect to="/page_not_found" />} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

App.propTypes = {
  base: PropTypes.string,
};
