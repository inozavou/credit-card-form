import "./styles/App.css";
import Form from "./Form";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { useState } from "react";

function App() {
  const [cardholder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="App">
      <div className="card-front-and-back">
        <CardFront
          cardholder={cardholder}
          cardNumber={cardNumber}
          expMonth={expMonth}
          expYear={expYear}
          setExpYear={setExpYear}
        />
        <CardBack cvc={cvc} />
      </div>

      <Form
        cardholder={cardholder}
        setCardHolder={setCardHolder}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        expMonth={expMonth}
        expYear={expYear}
        setExpMonth={setExpMonth}
        setExpYear={setExpYear}
        cvc={cvc}
        setCvc={setCvc}
        confirmed={confirmed}
        setConfirmed={setConfirmed}
      />
    </div>
  );
}

export default App;
