//Redux
import { createStore, compose, applyMiddleware } from "redux";

import reducers from "./ducks";
import sagas from "./sagas";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composer = process.env.NODE_ENV === "development" ?
  compose(
    applyMiddleware(...middlewares),
    // console.tron.createEnchancer(),
  )
  : applyMiddleware(...middlewares)

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas)

export default store

