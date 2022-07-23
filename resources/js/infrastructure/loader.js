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
import { useFetchCategories, useFetchPages } from "./APIHandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../presentation/components/404";
import { useTranslation } from "react-i18next";
import Footer from "../presentation/components/Footer";
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
            <Navbar pages={pages} />
            <Aside categories={categories} />
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
                        <Route index element={<Landing />} />
                        {found &&
                            categories.map((category, index) => (
                                <Route key={index} path={category.slug}>
                                    <Route
                                        index
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
                                    ></Route>
                                    <Route path={":slug"} element={<Post />} />
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
                        <Route
                            path="/gallery"
                            element={
                                <Gallery
                                    title={t("gallery")}
                                    keywords=""
                                    description=""
                                    data=""
                                />
                            }
                        />
                        <Route path="/students">
                            <Route
                                index
                                element={
                                    <Profiles
                                        title={t("students")}
                                        keywords=""
                                        description=""
                                        data=""
                                        type="students"
                                    />
                                }
                            />
                            <Route
                                path=":user"
                                element={
                                    <Profile
                                        title=""
                                        keywords=""
                                        description=""
                                        data=""
                                    ></Profile>
                                }
                            />
                        </Route>

                        <Route path="/faculty">
                            <Route
                                index
                                element={
                                    <Profiles
                                        title={t("faculty")}
                                        keywords=""
                                        description=""
                                        data=""
                                        type="faculty"
                                    />
                                }
                            />
                            <Route
                                path=":user"
                                element={
                                    <Profile
                                        title=""
                                        keywords=""
                                        description=""
                                        data=""
                                    ></Profile>
                                }
                            />
                        </Route>
                        <Route
                            path="tags/:tag"
                            element={
                                <>
                                    <Posts
                                        title=""
                                        keywords=""
                                        description=""
                                    />
                                    <Profiles
                                        title=""
                                        keywords=""
                                        description=""
                                        data=""
                                        type="faculty"
                                    />
                                    <Profiles
                                        title=""
                                        keywords=""
                                        description=""
                                        data=""
                                        type="students"
                                    />
                                </>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};
export default Loader;
