import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes.json';

const BookingPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardOtp, setCardOtp] = useState('');
  const [cardType, setCardType] = useState('');
  const [upiNumber, setUpiNumber] = useState('');
  const [upiOtp, setUpiOtp] = useState('');

  const navigate = useNavigate();

  const ticketPrice = useSelector((state) => state.ticket.ticketPrice);

  const cardTypeHandler = (e) => {
    setCardType(e.target.value);
  };

  const cardNumberHandler = (e) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, '');

    setCardNumber(digitsOnly);
  };

  const cardOtpHandler = (e) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, '');

    setCardOtp(digitsOnly);
  };

  const upiNumberHandler = (e) => {
    setUpiNumber(e.target.value);
  };

  const upiOtpHandler = (e) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, '');

    setUpiOtp(digitsOnly);
  };

  const payHandler = () => {
    if (
      cardType === 'card' &&
      (!cardNumber || !cardOtp || cardNumber.length < 16 || cardOtp.length < 4)
    ) {
      alert('Please fill all the card details properly');
    } else if (
      cardType === 'upi' &&
      (!upiNumber || !upiOtp || upiNumber.length < 4 || upiOtp.length < 4)
    ) {
      alert('Please fill all the UPI details properly');
    } else {
      alert('Payment successful! Get ready to enjoy the movie!');
      navigate(routes.HOME);
    }
  };

  const imgUrl = 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg';

  return (
    <div className="d-flex justify-content-left-3">
      <div className="p-2">
        <div className="d-flex">
          <img
            src={imgUrl}
            alt="Payment Illustration"
            style={{ width: '530pt', height: '355pt', marginTop: '10px' }}
          />

          <div
            style={{
              marginLeft: '30pt',
              marginRight: '30pt',
              marginTop: '10px',
              width: '100%',
            }}
            className="ml-3"
          >
            <Form>
              <Form.Group className="mb-3">
                <h4 className="mb-4">Proceed to Payment</h4>
                Total : {ticketPrice}/-
                <div className="mt-3">
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

              {cardType === 'card' && (
                <>
                  <Form.Group className="mb-4">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      maxLength="16"
                      value={cardNumber}
                      onChange={cardNumberHandler}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Enter OTP</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="4"
                      placeholder="Enter OTP"
                      value={cardOtp}
                      onChange={cardOtpHandler}
                    />
                  </Form.Group>
                </>
              )}

              {cardType === 'upi' && (
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
                    <Form.Label>Enter OTP</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="4"
                      placeholder="Enter OTP"
                      value={upiOtp}
                      onChange={upiOtpHandler}
                    />
                  </Form.Group>
                </>
              )}

              <div className="d-flex justify-content-end">
                <Button
                  variant="danger"
                  style={{ width: '100%' }}
                  disabled={
                    !cardType ||
                    (cardType === 'card' && (!cardNumber || !cardOtp)) ||
                    (cardType === 'upi' && (!upiNumber || !upiOtp))
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
