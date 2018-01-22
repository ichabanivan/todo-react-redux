import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';

import store, { history } from './store/';

import App from './components/App';

const renderApp = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Route path="/" component={ Component } />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('App')
  )
};

renderApp(App);

if(module.hot) {
  module.hot.accept('./components/App', () => { renderApp(App) })
}
