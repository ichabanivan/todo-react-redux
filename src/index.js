/**
 * React and ReactDOM
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
/**
 * Application
 */
import store from 'store/index';

/**
 * It is for HMR
 */
import { AppContainer } from 'react-hot-loader';
import App  from 'containers/App';

const renderApp = Component => {
  ReactDOM.render(
    /**
     * For the Provider, you need a key to work HMR when you are editing the Store
     */
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('App')
  )
};

renderApp(App);

/**
 * Using Webpack's Hot Module Replacement with React
 */
if(module.hot) {
  module.hot.accept('containers/App', () => { renderApp(App) })
}
