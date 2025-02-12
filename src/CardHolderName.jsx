import { useState } from "react";

function CardHolderName({ cardholder, setCardHolder }) {
  const [isWrong, setIsWrong] = useState(false);
  function handleSetCardHolder(e) {
    setIsWrong(false);

    let value = e.target.value;
    const re = /^[A-Za-z\s]*$/;

    if (value === " " || re.test(value)) {
      setCardHolder(value.toUpperCase());
    } else setIsWrong(true);
  }

  return (
    <div className="cardholder-name-container">
      <label className="cardholder-name">CARDHOLDER NAME</label>

      <input
        className={!isWrong ? "cardholder-input" : "error-cardholder-input"}
        type="text"
        value={cardholder}
        onChange={(e) => handleSetCardHolder(e)}
        placeholder="Your full name"
      />
      {isWrong && <p className="error-message">Wrong format, letters only</p>}
    </div>
  );
}

export default CardHolderName;
