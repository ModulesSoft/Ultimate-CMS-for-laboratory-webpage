import React, { Component, useEffect } from "react";
import Landing from "../presentation/pages/landing";
import Posts from "../presentation/pages/posts";
import Post from "../presentation/pages/post";
import Gallery from "../presentation/pages/gallery";
import Profiles from "../presentation/pages/profiles";
import Profile from "../presentation/pages/profile";
import Page from "../presentation/pages/page";
import { useFetchCategories } from "./APIHandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const Loader = () => {
    const { data, loading } = useFetchCategories({});
    const categories = data;
    const found = categories[0] ? true : false;
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index path="" element={<Landing />} />

                    {found &&
                        categories.map((category, index) => (
                            <Route key={index}>
                                <Route
                                    path={category.slug.en}
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
                                <Route
                                    path={category.slug.en + "/:slug"}
                                    element={<Post />}
                                />
                            </Route>
                        ))}

                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/profiles" element={<Profiles />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/page" element={<Page />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default Loader;
