import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { sessionService } from "redux-react-session";
import rootReducer from "./Reducers";
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : args => args,
      ),
  );
  sessionService.initSessionService(store);
  return store;
}
