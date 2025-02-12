import backCard from "./images/bg-card-back.png";
import "./styles/Card-front-and-back.css";

function CardBack({ cvc }) {
  return (
    <div className="credit-card-back-container">
      <p className="credid-card-cvc">{cvc}</p>
      <img src={backCard} alt="credit-back-card" />
    </div>
  );
}

export default CardBack;
