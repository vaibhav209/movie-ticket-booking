import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearTickets } from "../../reducers/ticketSlice";
import routes from "../../routes/routes.json";

const BookingTimer = () => {
  const [time, setTime] = useState(300);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      navigate(routes.HOME);
      dispatch(clearTickets());
    }
  }, [time, navigate, dispatch]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px 0px 20px 0px",
        color: "red",
        fontWeight: "bold"
      }}
    >
      {minutes} minutes {seconds} seconds remaining!
    </div>
  );
};

export default BookingTimer;
