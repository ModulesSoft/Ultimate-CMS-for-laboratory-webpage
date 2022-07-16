import React from "react";
import Aside from "../presentation/components/Sidebar";
import Navbar from "../presentation/components/Navbar";
import Landing from "../presentation/pages/Landing";
import Posts from "../presentation/pages/PostList";
import Post from "../presentation/pages/Post";
import Gallery from "../presentation/pages/Gallery";
import Profiles from "../presentation/pages/ProfileList";
import Profile from "../presentation/pages/Profile";
import Page from "../presentation/pages/Page";
import { useFetchCategories } from "./APIHandler";
import { useFetchPages } from "./APIHandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../presentation/components/404";
import { useTranslation } from "react-i18next";

export const Loader = () => {
    let { data } = useFetchCategories({});
    const categories = data;
    ({ data } = useFetchPages({}));
    const pages = data;
    const found = categories[0] && pages[0] ? true : false;
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
                            categories.map((category, index) => (
                                <Route key={index}>
                                    <Route
                                        path={category.slug}
                                        element={
                                            <Posts
                                                title={
                                                    category.name[i18n.language]
                                                }
                                                keywords=""
                                                description=""
                                                categoryId={category.id}
                                                categorySlug={category.slug}
                                            />
                                        }
                                    />
                                    <Route
                                        path={category.slug + "/:slug"}
                                        element={<Post />}
                                    />
                                </Route>
                            ))}
                        {found &&
                            pages.map((page, index) => (
                                <Route key={index}>
                                    <Route
                                        path={"/page/" + page.slug}
                                        element={
                                            <Page
                                                title={page.name[i18n.language]}
                                                data={page}
                                                keywords=""
                                                description=""
                                            />
                                        }
                                    />
                                </Route>
                            ))}
                        <Route path="/gallery" element={<Gallery />} />
                        {/* <Route path="/profiles" element={<Profiles />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/page" element={<Page />} /> */}

                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};
export default Loader;
