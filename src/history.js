import { createHashHistory } from 'history';
import { filterAll, filterCompleted, filterActive } from './actions/filter';
import store from './store';

const history = createHashHistory({});

history.listen((location, action) => {
  if (action === 'POP') {
    let filter = location.pathname.split('/')[1];

    if (filter === 'active') {
      store.dispatch(filterActive());
    } else if (filter === 'completed') {
      store.dispatch(filterCompleted());
    } else {
      store.dispatch(filterAll());
    }
  }
});

export default history
