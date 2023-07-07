import { createStore, applyMiddleware } from "redux";
// composeWithDevtools(applyMiddleware(thunk)) > para configurar la extension de chrome de REDUX despues de instalar devtools-extension
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
