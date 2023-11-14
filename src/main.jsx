import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
// import { store } from "./redux/app/store";
import userReducer from './crud/UserReducer'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users:userReducer
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
