import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  increaseWithAmount,
  ticketIncrement,
  ticketNumber
} from "../../reducers/ticketSlice";

const SectionC = ({ handleSelectedSeat }) => {
  const dispatch = useDispatch();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (index) => {
    if (!selectedSeats.includes(index)) {
      setSelectedSeats([...selectedSeats, index]);
      dispatch(increaseWithAmount(800));
      dispatch(ticketIncrement());
      dispatch(ticketNumber(index + 1));
    } else {
      alert("Seats cannot be deselected once selected !!");
    }
    handleSelectedSeat();
  };
  const bookedSeat = [3, 4, 7, 19, 20, 15];

  return (
    <div>
      <div style={{ color: "red", marginTop: "25px" }}>
        <p style={{ textAlign: "center" }}>PREMIUM ₹800</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {Array.from({ length: 22 }, (_, index) => (
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

export default SectionC;
