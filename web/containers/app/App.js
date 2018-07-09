import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Main from '../../components/Main';
import Login from '../../components/login/Login';
import Logout from '../../components/login/Logout';
import AdminPanel from '../../components/admin';
import NotFound from '../errors/NotFound';
import Navbar from '../navbar';
import DashBoard from '../../components/dashboard';

import './App.sass';

import configureStore from '../../services/store';

const initialState = {};

const { store, persistor } = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/admin" component={AdminPanel} />
            <Route path="/page_not_found" component={NotFound} />
            <Route path="*" component={() => <Redirect to="/page_not_found" />} />
          </Switch>
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
