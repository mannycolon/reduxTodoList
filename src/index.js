import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App"
import reducer from "./reducers";


let store = createStore(reducer);

class Index extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

 ReactDom.render(<Index />, document.getElementById('root'));
