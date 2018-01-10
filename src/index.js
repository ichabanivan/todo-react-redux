import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/index';
import { AppContainer } from 'react-hot-loader';

import App  from 'containers/App';

const renderApp = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('App')
  )
};

renderApp(App);

if(module.hot) {
  module.hot.accept('containers/App', () => { renderApp(App) })
}
