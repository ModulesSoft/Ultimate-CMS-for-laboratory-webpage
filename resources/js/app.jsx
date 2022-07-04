import "./bootstrap";
import "./application/common";
import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./presentation/layouts/layout";
document.documentElement.setAttribute("lang", "en");
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Layout />);
