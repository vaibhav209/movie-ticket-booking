import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes.json";

const BookingPayment = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardType, setCardType] = useState("");
  const [upiNumber, setUpiNumber] = useState("");
  const [upiPin, setUpiPin] = useState("");

  const navigate = useNavigate();

  const cardTypeHandler = (e) => {
    setCardType(e.target.value);
  };

  const cardNameHandler = (e) => {
    setCardName(e.target.value.toUpperCase());
  };

  const cardNumberHandler = (e) => {
    setCardNumber(e.target.value);
  };

  const cardCvvHandler = (e) => {
    setCardCvv(e.target.value);
  };

  const upiNumberHandler = (e) => {
    setUpiNumber(e.target.value);
  };

  const upiPinHandler = (e) => {
    setUpiPin(e.target.value);
  };

  const payHandler = () => {
    if (cardType === "card" && (!cardName || !cardNumber || !cardCvv)) {
      alert("Please fill all the card details properly");
    } else if (cardType === "upi" && (!upiNumber || !upiPin)) {
      alert("Please fill all the UPI details properly");
    } else {
      alert("Payment successful! Get ready to enjoy the movie!");
      navigate(routes.HOME);
    }
  };

  const imgUrl = "https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg";

  return (
    <div className="d-flex justify-content-left-3">
      <div className="p-2">
        <div className="d-flex">
          <img
            src={imgUrl}
            alt="Payment Illustration"
            style={{ width: "530pt", height: "355pt", marginTop: "10px" }}
          />

          <div
            style={{
              marginLeft: "30pt",
              marginRight: "30pt",
              marginTop: "10px",
              width: "100%"
            }}
            className="ml-3"
          >
            <Form>
              <Form.Group className="mb-3">
                <h4 className="mb-4">Proceed to Payment</h4>
                <div>
                  <Form.Check
                    label="Credit Card"
                    type="radio"
                    name="cardOption"
                    value="card"
                    onChange={cardTypeHandler}
                  />
                  <Form.Check
                    label="Debit Card"
                    type="radio"
                    name="cardOption"
                    value="card"
                    onChange={cardTypeHandler}
                  />
                  <Form.Check
                    label="UPI"
                    type="radio"
                    name="cardOption"
                    value="upi"
                    onChange={cardTypeHandler}
                  />
                </div>
              </Form.Group>

              {cardType === "card" && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Card Holder Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      value={cardName}
                      onChange={cardNameHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      maxLength="16"
                      value={cardNumber}
                      onChange={cardNumberHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Enter CVV</Form.Label>
                    <Form.Control
                      type="tel"
                      inputMode="numeric"
                      maxLength="3"
                      placeholder="Enter CVV"
                      value={cardCvv}
                      onChange={cardCvvHandler}
                    />
                  </Form.Group>
                </>
              )}

              {cardType === "upi" && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>UPI ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="xyz@mybank"
                      value={upiNumber}
                      onChange={upiNumberHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>UPI PIN</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter UPI PIN"
                      value={upiPin}
                      onChange={upiPinHandler}
                    />
                  </Form.Group>
                </>
              )}

              <div className="d-flex justify-content-end">
                <Button
                  variant="danger"
                  style={{ width: "100%" }}
                  disabled={
                    !cardType ||
                    (cardType === "card" &&
                      (!cardName || !cardNumber || !cardCvv)) ||
                    (cardType === "upi" && (!upiNumber || !upiPin))
                  }
                  onClick={payHandler}
                >
                  PAY
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPayment;
