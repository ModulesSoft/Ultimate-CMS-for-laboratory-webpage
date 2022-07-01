import React, { Component, useEffect } from "react";
import Landing from "../presentation/pages/landing";
import Posts from "../presentation/pages/posts";
import Post from "../presentation/pages/post";
import Gallery from "../presentation/pages/gallery";
import Profiles from "../presentation/pages/profiles";
import Profile from "../presentation/pages/profile";
import Page from "../presentation/pages/page";
import { useFetchCategories } from "./APIHandler";
import { Routes, Route } from "react-router-dom";
export const Loader = () => {
    const { data, loading } = useFetchCategories({});
    const categories = data;
    const found = categories[0] ? true : false;
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            {found &&
                categories.map((category) => (
                    <Route
                        key={category.id}
                        path={"/" + category.slug.en}
                        element={
                            <Posts
                                title={category.name.en}
                                keywords=""
                                description=""
                                categoryId={category.id}
                                categorySlug={category.slug.en}
                            />
                        }
                    />
                ))}
            <Route path="/news" element={<Posts type="news" />} />
            <Route path="/post" element={<Post />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/page" element={<Page />} />
        </Routes>
    );
};
export default Loader;
