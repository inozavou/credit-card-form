import { useState } from "react";

function CardNumber({ cardNumber, setCardNumber }) {
  const [isWrong, setIsWrong] = useState(false);

  function handleSetCardNumber(e) {
    setIsWrong(false);
    let value = e.target.value;

    value = value.replace(/\s/g, "");

    const re = /^[0-9\s]*$/;
    if (re.test(value)) {
      if (value.length > 16) {
        value = value.slice(0, 16);
      }
      value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
      setCardNumber(value);
    } else setIsWrong(true);
  }

  return (
    <div className="card-number-container">
      <label className="card-number">CARD NUMBER</label>
      <input
        className={isWrong ? "error-card-number-input" : "card-number-input"}
        placeholder="0000-0000-0000-0000"
        value={cardNumber}
        onChange={(e) => handleSetCardNumber(e)}
      />
      {isWrong && <p className="error-message">Wrong format, numbers only</p>}
    </div>
  );
}

export default CardNumber;
