import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import userManager, { loadUserFromStorage } from "services/Auth/userManager";
import AuthProvider from "services/Auth/AuthProvider/authProvider";
import { Provider } from "react-redux";
import store from "store/store";
import App from "./app";
import * as serviceWorker from "./serviceWorker";

function Index() {


  
  useEffect(() => {
    loadUserFromStorage(store);
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider userManager={userManager} store={store}>
        <App />
      </AuthProvider>
    </Provider>
  );
}
ReactDOM.render(<Index />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
