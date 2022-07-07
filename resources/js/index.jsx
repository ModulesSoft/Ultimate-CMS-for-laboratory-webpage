import "./bootstrap";
import "./application/common";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./presentation/layouts/App";
import "./application/i18n";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
