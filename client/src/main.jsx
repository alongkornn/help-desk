import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { FormTicket } from "./components/pages/ticket/FormTicket";
import { UpdateFormTicket } from "./components/pages/ticket/UpdateFormTicket";
import { ShowTicketAdmin } from "./components/pages/ticket/ShowTicketAdmin";
import { Content } from "./components/Content";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/form-ticket" element={<FormTicket />} />
        <Route path="/edit-ticket/:id" element={<UpdateFormTicket />} />
        <Route path="/show-detail-ticket" element={<ShowTicketAdmin />} />
        <Route path="/" element={<Content />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
