import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./redux/sagas/index";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(saga, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
