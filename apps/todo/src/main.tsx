import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { applyMiddleware, createStore, Store } from 'redux';
import App from './components/app/app';
import { DispatchType, ITodoAction, TodoState } from './store';
import reducer from './store/reducers';
import thunk from "redux-thunk"
import { Provider } from "react-redux"

const store: Store<TodoState, ITodoAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
