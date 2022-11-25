import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux"
import {applyMiddleware,compose,legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"
const store = createStore(reducers,compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


//store that hold the state of our application
//action describe the change in the state of our application
//action is an object with type property
//reducers ties the store and actions together and return new state 
//reducers - (previousState,action)=>newState
//dispatch is basicaaly emit an action
//if we want extra functionalities we introduce middlewares for logging in and performing asynchronous task
//combinereducers is a way to combine two or more different reducers and then we pass that object into createstore(reducerrs)
//thunk allow us to return an function instead of action so that function can perform 
//sideffects such as async task
// the function we make in the place where we want to change the state that takes redux state as 
//parameter and return a new object
//use Selectore is a hook it gets to hold of any state that is maintained in the redux store.
//useDispatch is used to dispatch an action with react-redux