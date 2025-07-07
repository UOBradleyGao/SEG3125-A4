import React, { useState } from "react";

export default function CartPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    address: "",
    card: "",
  });

  const nextStep = () => setStep(step + 1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>🛒 Checkout</h2>

      <p>Step {step} of 3</p>

      {step === 1 && (
        <form>
          <label>
            Name:
            <input name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Address:
            <input name="address" value={form.address} onChange={handleChange} />
          </label>
          <button type="button" onClick={nextStep}>Continue</button>
        </form>
      )}

      {step === 2 && (
        <form>
          <label>
            Credit Card Info:
            <input name="card" value={form.card} onChange={handleChange} />
          </label>
          <button type="button" onClick={nextStep}>Submit Payment</button>
        </form>
      )}

      {step === 3 && (
        <div>
          <h3>Order Confirmed!</h3>
          <p>Thank you, {form.name}! Your items will be shipped to: {form.address}</p>
        </div>
      )}
    </>
  );
}
