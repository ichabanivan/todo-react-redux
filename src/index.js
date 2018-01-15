import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import history from './history';

import {
  Router,
  Route
} from 'react-router-dom'

const renderApp = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Component} />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('App')
  )
};

renderApp(App);

if(module.hot) {
  module.hot.accept('./components/App', () => { renderApp(App) })
}
