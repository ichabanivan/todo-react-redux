import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/';
import { AppContainer } from 'react-hot-loader';
import App  from './components/App';
// import { Router } from 'react-router-dom'
// import history from './history'

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
  module.hot.accept('./components/App', () => { renderApp(App) })
}
