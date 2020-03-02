// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import { combineReducers, createStore } from "redux";

const ADD_TODO = "ADD_TODO";

function visibilityFilter(state = "SHOW_ALL", action) {
  if (action.type === "SET_VISIBILITY_FILTER") {
    return action.filer;
  } else {
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([
        {
          text: action.text,
          completed: false
        }
      ]);
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        action.index === index ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

const reducer = combineReducers({ visibilityFilter, todos });
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo("Learn Sagas"));
