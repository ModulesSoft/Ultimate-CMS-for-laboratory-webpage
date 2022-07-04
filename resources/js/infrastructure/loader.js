import React from "react";
import Aside from "../presentation/components/sidebar";
import Navbar from "../presentation/components/navbar";
import Landing from "../presentation/pages/landing";
import Posts from "../presentation/pages/posts";
import Post from "../presentation/pages/post";
import Gallery from "../presentation/pages/gallery";
import Profiles from "../presentation/pages/profiles";
import Profile from "../presentation/pages/profile";
import Page from "../presentation/pages/page";
import { useFetchCategories } from "./APIHandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../presentation/components/404";
import { useTranslation } from "react-i18next";
export const Loader = () => {
    const { data, loading } = useFetchCategories({});
    const categories = data;
    const found = categories[0] ? true : false;
    const { t, i18n } = useTranslation();
    const closeSidebar = () => {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    };
    return (
        <BrowserRouter>
            <Navbar />
            <Aside />
            <main id="main">
                {/* Overlay */}
                <div
                    className="w3-overlay"
                    onClick={closeSidebar}
                    style={{ cursor: "pointer" }}
                    id="myOverlay"
                />
                <Routes>
                    <Route path="/">
                        <Route index path="" element={<Landing />} />

                        {found &&
                            console.log(categories) &&
                            categories.map((category, index) => (
                                <Route key={index}>
                                    <Route
                                        path={category.slug[i18n.language]}
                                        element={
                                            <Posts
                                                title={
                                                    category.name[i18n.language]
                                                }
                                                keywords=""
                                                description=""
                                                categoryId={category.id}
                                                categorySlug={
                                                    category.slug[i18n.language]
                                                }
                                            />
                                        }
                                    />
                                    <Route
                                        path={
                                            category.slug[i18n.language] +
                                            "/:slug"
                                        }
                                        element={<Post />}
                                    />
                                </Route>
                            ))}

                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/profiles" element={<Profiles />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/page" element={<Page />} />

                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};
export default Loader;
