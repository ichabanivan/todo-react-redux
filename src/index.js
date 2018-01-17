import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store/';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';

const renderApp = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Component />
          </div>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('App')
  )
};

renderApp(App);

if(module.hot) {
  module.hot.accept('./components/app', () => { renderApp(App) })
}
