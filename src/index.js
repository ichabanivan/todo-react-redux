import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
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

// todo
//
// 1. Компонент todos в отдельный файл
//
// 2.
//<div>
// <Input id={ id } />
// <Route path="/:id?/:modal?" component={ EditTodo } /> // Добавить ? и убрать роут в App
// <TodoList id={ id } />
//</div>
//
// 3. Инпут и редактирование это 1 компонент
// 4. Вынести все push
// 5. id в store синхронизировать везде
// 6. Убрать body and label если не перерендеривается что-то не правильно передаю
// 7. isActive изменть только атрибут
// 8. Хранить 2 даты дата создания и дата последнего редактирования
// 9. Сделать нормальный формат Date
// 10. t переименовать в todo в селекторе
// 11. не перебивать index
// 12. переименовать action/router
// 13. 62 строка actions/todo лучше использовать forEach
// 14. Сделать нормальный id хотя бы Math.floor(Math.random()*10000)
// 15. dispatch(push(`/${length}/error`)); // length сделать текущий id
// 16. При изменении статуса 2 раза сохраняю дату 38, 90 строка
// 17. SetFilter сделал нормально кроме класов (пересмотреть)

// var a = new Date()
//
// a.getDate()
// a.getMonth() + 1
// a.getFullYear()
// a.getHours()
// a.getMinutes()
// a.getSeconds()
