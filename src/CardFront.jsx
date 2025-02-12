import frontCard from "./images/bg-card-front.png";
import cardLogo from "./images/card-logo.svg";
import "./styles/Card-front-and-back.css";

function CardFront({ cardholder, cardNumber, expMonth, expYear, setExpYear }) {
  return (
    <div className="credit-card-front-container">
      <img
        className="credit-card-background-gradient"
        src={frontCard}
        alt="credit-front-card"
      />
      <div className="credit-card-elements">
        <img className="credit-card-logo" src={cardLogo} alt="card-logo" />
        <div className="credit-card-number">{cardNumber}</div>
        <div className="credit-name-and-expDate">
          <div className="credit-placeholder-name">{cardholder}</div>
          <div className="credit-exp-date">
            {expMonth ? expMonth : "MM"} / {expYear ? expYear : "YY"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
