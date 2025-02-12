function Cvc({ cvc, setCvc }) {
  function handleSetCvc(e) {
    let value = e.target.value;

    const re = /^[0-9]*$/;
    if (re.test(value)) {
      if (value.length > 3) return;

      setCvc(value);
    }
  }

  return (
    <div className="cvc-container">
      <label className="cvc-label">CVC</label>
      <input
        className="cvc-input"
        placeholder="***"
        value={cvc}
        onChange={(e) => {
          handleSetCvc(e);
        }}
      />
    </div>
  );
}

export default Cvc;
