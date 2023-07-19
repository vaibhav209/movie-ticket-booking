import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  increaseWithAmount,
  ticketIncrement,
  ticketNumber
} from "../../reducers/ticketSlice";

const SectionD = ({ handleSelectedSeat }) => {
  const dispatch = useDispatch();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (index) => {
    if (!selectedSeats.includes(index)) {
      setSelectedSeats([...selectedSeats, index]);
      dispatch(increaseWithAmount(1200));
      dispatch(ticketIncrement());
      dispatch(ticketNumber(index + 1));
    } else {
      alert("Seats cannot be deselected once selected !!");
    }
    handleSelectedSeat();
  };
  const bookedSeat = [3, 4, 5, 7];

  return (
    <div>
      <div style={{ color: "red", marginTop: "25px" }}>
        <p style={{ textAlign: "center" }}>VIP ₹1200</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {Array.from({ length: 9 }, (_, index) => (
          <Button
            className="m-1"
            key={index}
            variant={
              selectedSeats.includes(index + 1)
                ? "danger"
                : bookedSeat.includes(index + 1)
                ? "warning"
                : "outline-secondary"
            }
            onClick={() => handleSeatClick(index + 1)}
            disabled={bookedSeat.includes(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SectionD;
