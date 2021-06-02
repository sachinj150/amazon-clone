import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        {/* Payment section - delivery address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment section - Review Items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and deliver</h3>
          </div>
        </div>
        {/* Payment section - Payment method*/}
        <div className="payment__section"></div>
      </div>
    </div>
  );
}

export default Payment;
