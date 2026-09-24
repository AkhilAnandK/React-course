import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  // return <h1 style={style}>Akhil's Pizza Company</h1>;

  return (
    <header className="header">
      <h1>Akhil's Pizza Company</h1>
    </header>
  );
}

function Menu() {
  const pizzas = [pizzaData];
  const pizzaLength = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaLength > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone even, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on the menu. Please come back later!</p>
      )}
    </main>
  );
}

// function Pizza(props) {
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  //if (props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? (
          <span>Sold Out</span>
        ) : (
          <span>${pizzaObj.price + 3}</span>
        )}
      </div>
    </li>
  );
}

function Footer() {
  //return React.createElement("footer", null, "We are currently open!");
  const hour = new Date().getHours();
  const isOpen = hour >= 12 && hour <= 22;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We are currently open until 10:00pm.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
