import { useState } from "react";

function ExpDate({ expMonth, expYear, setExpMonth, setExpYear }) {
  const [isWrong, setIsWrong] = useState(false);
  function handleExpMonth(e) {
    setIsWrong(false);
    let value = e.target.value;
    const re = /^[0-9\s]*$/;
    if (value === "" || (re.test(value) && value >= 0 && value <= 12)) {
      if (value.length > 2) return;
      setExpMonth(value);
    } else if (value[1] > 1) setIsWrong(true);
  }

  function handleExpYear(e) {
    let value = e.target.value;
    const re = /^[0-9]*$/;
    if (re.test(value)) {
      if (value.length > 2) return;
      setExpYear(value);
    }
  }
  return (
    <div className="exp-date-container">
      <label className="exp-date">EXP. DATE (MM/YY)</label>
      <div className="exp-date-input">
        <div className="month-input">
          <input
            className={
              isWrong ? "error-exp-date-month-input" : "exp-date-month-input"
            }
            placeholder="MM"
            value={expMonth}
            onChange={(e) => handleExpMonth(e)}
          />
          {isWrong && <p className="error-message">Invalid month</p>}
        </div>
        <input
          className="exp-date-year-input"
          placeholder="YY"
          value={expYear}
          onChange={(e) => handleExpYear(e)}
        />
      </div>
    </div>
  );
}

export default ExpDate;
