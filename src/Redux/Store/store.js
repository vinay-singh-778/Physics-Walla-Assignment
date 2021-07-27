import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootSaga from "../Sagas/appLoadSaga";
import allReducers from "../Reducers/allReducers";

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const myStore = createStore(
		allReducers,
		compose(
			applyMiddleware(sagaMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
	sagaMiddleware.run(rootSaga);
	return myStore;
};

export default configureStore;