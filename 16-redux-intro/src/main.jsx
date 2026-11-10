import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store";

store.dispatch({ type: "account/deposit", payload: 2500 });
console.log(store.getState());
store.dispatch({ type: "account/withdraw", payload: 1500 });
console.log(store.getState());
store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 1000, purpose: "buy ps5 pro" },
});
console.log(store.getState());
store.dispatch({ type: "account/payLoan" });
console.log(store.getState());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
