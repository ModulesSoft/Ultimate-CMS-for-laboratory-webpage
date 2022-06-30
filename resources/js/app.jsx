import "./bootstrap";
import "./application/common";
import React from "react";
import Landing from "./presentation/pages/landing";
import Posts from "./presentation/pages/posts";
import Post from "./presentation/pages/post";
import Gallery from "./presentation/pages/gallery";
import Profiles from "./presentation/pages/profiles";
import Profile from "./presentation/pages/profile";
import Page from "./presentation/pages/page";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
document.documentElement.setAttribute("lang", "en");
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post" element={<Post />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/page" element={<Page />} />
        </Routes>
    </BrowserRouter>
);
