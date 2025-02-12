import CardHolderName from "./CardHolderName";
import CardNumber from "./CardNumber";
import ExpDate from "./ExpDate";
import Cvc from "./Cvc";
import ConfirmMessage from "./ConfirmMessage.jsx";
import myImage from "./images/bg-main-desktop.png";
import "./styles/Form.css";
import "./styles/Confirm-message-container.css";

function Form({
  cardholder,
  setCardHolder,
  cardNumber,
  setCardNumber,
  expMonth,
  expYear,
  setExpMonth,
  setExpYear,
  cvc,
  setCvc,
  confirmed,
  setConfirmed,
}) {
  return (
    <div className="app-container">
      <img className="background-image" src={myImage} alt="background" />

      {!confirmed ? (
        <form className="form">
          <div className="form-container">
            <CardHolderName
              cardholder={cardholder}
              setCardHolder={setCardHolder}
            />

            <CardNumber cardNumber={cardNumber} setCardNumber={setCardNumber} />
            <div className="bottom-inputs">
              <ExpDate
                expMonth={expMonth}
                expYear={expYear}
                setExpMonth={setExpMonth}
                setExpYear={setExpYear}
              />

              <Cvc cvc={cvc} setCvc={setCvc} />
            </div>

            <button
              className="confirm-button"
              onClick={() => setConfirmed(true)}
            >
              Confirm
            </button>
          </div>
        </form>
      ) : (
        <ConfirmMessage setConfirmed={setConfirmed} />
      )}
    </div>
  );
}

export default Form;
