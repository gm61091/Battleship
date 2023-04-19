/* This code is creating a Redux store by importing the `createStore` function from the `redux` library
and the `rootReducer` from the `reducers` file. It then creates a store by passing the `rootReducer`
to the `createStore` function and exports the store as the default export of the module. This store
can be used to manage the state of a JavaScript application. */
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default store;
