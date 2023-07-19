import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  increaseWithAmount,
  ticketIncrement,
  ticketNumber
} from "../../reducers/ticketSlice";

const SectionA = ({ handleSelectedSeat }) => {
  const dispatch = useDispatch();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (index) => {
    if (!selectedSeats.includes(index)) {
      setSelectedSeats([...selectedSeats, index]);
      dispatch(increaseWithAmount(300));
      dispatch(ticketIncrement());
      dispatch(ticketNumber(index + 1));
    } else {
      alert("Seats cannot be deselected once selected !!");
    }
    handleSelectedSeat();
  };

  const bookedSeats = [19, 22, 5, 9, 32, 34, 38];
  return (
    <div>
      <div style={{ color: "red", marginTop: "25px" }}>
        <p style={{ textAlign: "center" }}>NORMAL ₹300</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {Array.from({ length: 44 }, (_, index) => (
          <Button
            className="m-1"
            key={index}
            variant={
              selectedSeats.includes(index + 1)
                ? "danger"
                : bookedSeats.includes(index + 1)
                ? "warning"
                : "outline-secondary"
            }
            onClick={() => handleSeatClick(index + 1)}
            disabled={bookedSeats.includes(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SectionA;
