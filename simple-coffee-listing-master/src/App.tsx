import "./App.css";
import CoffeeList from "../components/CoffeeList";
import BackgroundSVG from "../components/BackgroundSVG";
import { useState } from "react";

function App() {
  const [isAvailable, setIsAvailable] = useState(true);
  return (
    <>
      <main>
        <div className="main-heading">
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <BackgroundSVG />
        </div>
        <section aria-labelledby="section-header">
          <h2 id="section-header" className="sr-only">
            Coffees
          </h2>
          <div>
            <button
              className={isAvailable ? "active" : ""}
              onClick={() => setIsAvailable(true)}
            >
              All Products
            </button>
            <button
              className={!isAvailable ? "active" : ""}
              onClick={() => setIsAvailable(false)}
            >
              Available Now
            </button>
          </div>
          <CoffeeList isAvailable={isAvailable} />
        </section>
      </main>
    </>
  );
}

export default App;
