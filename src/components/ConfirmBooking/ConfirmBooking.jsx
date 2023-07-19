import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearTickets } from "../../reducers/ticketSlice";
import routes from "../../routes/routes.json";
import BookingTimer from "../BookingTimer/BookingTimer";

const ConfirmBooking = () => {
  const ticket = useSelector((state) => state.ticket.numberOfTicket);
  const ticketPrice = useSelector((state) => state.ticket.ticketPrice);
  const movieName = useSelector((state) => state.ticket.movieTitle);
  const movieLanguage = useSelector((state) => state.ticket.languageTitle);
  const posterImg = useSelector((state) => state.ticket.moviePoster);
  const seats = useSelector((state) => state.ticket.seats);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate(routes.HOME);
    dispatch(clearTickets());
  };
  const updatedSeat = seats.map((seat) => seat - 1);
  return (
    <Container>
      <div style={{ textAlign: "left" }}>
        <BookingTimer />
        <div className={"d-flex"}>
          <div>
            <img
              src={posterImg}
              alt="Movie Poster"
              style={{ width: "95%", height: "70%" }}
            />
          </div>
          <div style={{ marginLeft: "35px", flex: "2" }}>
            <p className="mb-5">
              <strong>Seat number:</strong> {updatedSeat.join(",")}
            </p>
            <p className="mb-5">
              <p className="mb-5">
                {" "}
                <strong>Tickets:</strong> {ticket}
              </p>
              <strong>Movie:</strong>{" "}
              <span>
                {movieName} ({movieLanguage})
              </span>
            </p>
            <p>
              <strong>Total:</strong> ₹{ticketPrice}
            </p>
            <div
              style={{ marginTop: "30px" }}
              className={"d-flex justify-content-start gap-4"}
            >
              <div>
                <Button variant="danger" onClick={cancelHandler}>
                  Cancel
                </Button>
              </div>
              <div>
                <Button
                  variant="success"
                  onClick={() => navigate(routes.PAYMENT)}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ConfirmBooking;
