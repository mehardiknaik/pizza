import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [qty, setQty] = useState(0);
  const [checkbox, setCheckbox] = useState(false);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(0);
  const [addons] = useState(30);
  const [discount] = useState(10);

  const handleinc = () => {
    setQty((prev) => prev + 1);
  };
  const handledec = () => {
    if (qty > 0) {
      setQty((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setTotal(qty * 100);
  }, [qty]);

  useEffect(() => {
    let py = total - (total * discount) / 100;
    setPay(py);
  }, [total]);

  useEffect(() => {
    setTotal((prev) =>prev?checkbox? prev + addons: prev - addons:0);
  }, [checkbox]);
  return (
    <div className="App">
      <div className="totalContainer bottomItems">
      <div>
        <div>
          <button onClick={handleinc}>+</button>
          {qty}
          <button onClick={handledec}>-</button>
        </div>
        <input
          disabled={qty == 0}
          defaultChecked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
          type="checkbox"
        />
        add ons
      </div>
      <div>
        <img height={'100'} src="/pizza.svg" />
      </div>
      </div>
      <div className="totalContainer">
        <div className="bottomItems">
          <div>Total</div>
          <div>{total}</div>
        </div>
        <div className="bottomItems">
          <div>Discount</div>
          <div>{discount} %</div>
        </div>
        <div className="bottomItems">
          <div>To Pay</div>
          <div>{pay}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
