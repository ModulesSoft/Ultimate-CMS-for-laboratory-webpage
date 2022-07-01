import "./bootstrap";
import "./application/common";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loader from "./infrastructure/loader";
document.documentElement.setAttribute("lang", "en");
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <Loader />
    </BrowserRouter>
);
