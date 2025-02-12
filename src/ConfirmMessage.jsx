import iconComplete from "./images/icon-complete.svg";

function ConfirmMessage({ setConfirmed }) {
  return (
    <div className="confirm-message-container">
      <img src={iconComplete} alt="complete-icon" />
      <h1>THANK YOU!</h1>
      <p className="complete-message">We've added your card details</p>
      <button onClick={() => setConfirmed(false)}>Continue</button>
    </div>
  );
}

export default ConfirmMessage;
