import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store/';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

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
  module.hot.accept('./components/App', () => { renderApp(App) })
}

// Filter принимает строку
// Reducer Filter 1 action в компоненте передавать константу
// App c большой
// Модалки без switch и глобально
// Модалка по роуту action match
// Храним состояние модалки
