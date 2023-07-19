import React from "react";
import { Route, Routes } from "react-router-dom";
import NavHeader from "../components/NavHeader/NavHeader";
import Confirm from "../pages/Confirm";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Seat from "../pages/Seat";
import routes from "./routes.json";

const PageRoutes = () => {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.SEAT} element={<Seat />} />
        <Route path={routes.CONFIRM_TICKET} element={<Confirm />} />
        <Route path={routes.PAYMENT} element={<Payment />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
