require("./helpers");
import React from "react";
import Landing from "../views/pages/landing";
import Posts from "../views/pages/posts";
import Post from "../views/pages/post";
import Gallery from "../views/pages/gallery";
import Profiles from "../views/pages/profiles";
import Profile from "../views/pages/profile";
import Page from "../views/pages/page";

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
