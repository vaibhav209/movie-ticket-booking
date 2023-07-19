import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import SectionA from "../SectionA/SectionA";
import SectionB from "../SectionB/SectionB";
import SectionC from "../SectionC/SectionC";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes.json";
import SectionD from "../SectionD/SectionD";

const SeatSelection = () => {
  const navigate = useNavigate();

  const [isSeatSelected, setIsSeatSelected] = useState(false);

  const ticketPrice = useSelector((state) => state.ticket.ticketPrice);

  const handleSelectedSeat = () => {
    setIsSeatSelected(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      alert("Seats cannot be deselected. Please choose your seats carefully!!");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Container>
        <div
          style={{
            marginTop: "1px",
            textAlign: "center",
            border: "1px solid",
            borderBottom: "1px solid",
            color: "#007BFF"
          }}
        >
          Screen This Way
        </div>
        <SectionA handleSelectedSeat={handleSelectedSeat} />
        <hr />
        <SectionB handleSelectedSeat={handleSelectedSeat} />
        <hr />
        <SectionC handleSelectedSeat={handleSelectedSeat} />
        <hr />
        <SectionD handleSelectedSeat={handleSelectedSeat} />
        <hr />

        <div style={{ marginTop: "10px", float: "right" }}>
          {isSeatSelected && ticketPrice !== 0 && (
            <>
              <p>
                Total : <strong>₹{ticketPrice}</strong>
              </p>
              <Button
                style={{ marginBottom: "20%" }}
                variant="primary"
                onClick={() => navigate(routes.CONFIRM_TICKET)}
              >
                Continue
              </Button>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default SeatSelection;
