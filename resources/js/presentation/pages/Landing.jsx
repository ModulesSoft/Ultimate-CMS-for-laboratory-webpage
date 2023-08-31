import Slideshow from "../components/Slideshow";
import Hero from "../components/Hero";
import PageWrapper from "../components/PageWrapper";
import {
    useFetchPosts,
    useFetchSlides,
    useFetchProfiles,
} from "../../infrastructure/APIHandler";
import { useTranslation } from "react-i18next";
import { getThumbUri } from "../../application/common";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import MoreButton from "../components/MoreButton";
export const Landing = () => {
    const { t, i18n } = useTranslation();
    let { data, loading } = useFetchSlides();
    const slides = data;
    ({ data, loading } = useFetchPosts({
        featured: true,
    }));
    const featuredPosts = data;
    if (featuredPosts[0]) {
        var featuredPostsFirstRow = featuredPosts.slice(0, 2);
        var featuredPostsSecondRow = featuredPosts.slice(2, 5);
    }
    ({ data, loading } = useFetchProfiles({
        type: "faculty",
    }));
    const faculty = data;
    const keywords = t("site keywords");
    const description = t("home");
    const title = t("laboratory") + " - " + t("home");
    return (
        <PageWrapper
            keywords={keywords}
            description={description}
            title={title}
            loading={loading}
        >
            <section id="intro">
                <Hero
                    h1={{ text: t("laboratory"), link: "/" }}
                    p={{
                        text: t("university"),
                        link: t("link to the university"),
                    }}
                />
                {slides[0] && <Slideshow slides={slides} />}
            </section>
            <section id="featured-2">
                <div className="featured featured--first-background">
                    <h2 className="w3-text-dark-grey">
                        <i className="fa-solid fa-star" />
                        <span className="w3-padding">
                            {t("featured first row")}
                        </span>
                    </h2>
                    <div className="w3-cell w3-mobile-row">
                        {featuredPostsFirstRow &&
                            featuredPostsFirstRow.map((post) => (
                                <div
                                    key={post.id}
                                    className="w3-round-large w3-cell w3-mobile "
                                >
                                    <div className="w3-light-grey w3-padding w3-margin w3-round-large">
                                        <article>
                                            <h4>
                                                {post.title[i18n.language] ??
                                                    t("translation not found")}
                                            </h4>
                                            <hr />
                                            <p
                                                className="w3-text-dark-grey featured__text"
                                                dangerouslySetInnerHTML={{
                                                    __html: post.content[
                                                        i18n.language
                                                    ],
                                                }}
                                            ></p>
                                        </article>
                                        <MoreButton
                                            type="large"
                                            to={`/${post.category.slug}/${post.slug}`}
                                        ></MoreButton>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            <section id="featured-3">
                <div className="featured featured--second-background">
                    <h2 className="w3-text-dark-grey">
                        <i className="fa-solid fa-bolt" />
                        <span className="w3-padding">
                            {t("featured second row")}
                        </span>
                    </h2>
                    <div className="w3-cell w3-mobile-row">
                        {featuredPostsSecondRow &&
                            featuredPostsSecondRow.map((post) => (
                                <div
                                    key={post.id}
                                    className="w3-round-large w3-cell w3-mobile"
                                >
                                    <div className="w3-light-grey w3-padding w3-margin w3-round-large">
                                        <article>
                                            <h4 className="w3-text-dark-grey">
                                                {post.title[i18n.language] ??
                                                    t("translation not found")}
                                            </h4>
                                            <hr />
                                            <p
                                                className="w3-text-dark-grey featured__text"
                                                dangerouslySetInnerHTML={{
                                                    __html: post.content[
                                                        i18n.language
                                                    ],
                                                }}
                                            ></p>
                                        </article>
                                        <MoreButton
                                            type="large"
                                            to={`/${post.category.slug}/${post.slug}`}
                                        ></MoreButton>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            <section id="people">
                <h2 className="people__header w3-text-dark-grey w3-light-blue w3-padding">
                    <i className="fa-solid fa-chalkboard-user" />
                    <span className="w3-padding">{t("faculty")}</span>
                </h2>
                <div className="w3-cell w3-mobile-row">
                    {faculty[0] &&
                        faculty.map((professor) => (
                            <div
                                key={professor.id}
                                className="w3-cell w3-mobile w3-light-grey w3-card-4 w3-padding w3-round"
                            >
                                <header>
                                    <img
                                        src={getThumbUri(
                                            "150x150",
                                            professor.image
                                        )}
                                        className="w3-round"
                                        style={{ width: 50, height: 50 }}
                                        loading="lazy"
                                        alt={professor.user.name[i18n.language]}
                                    />
                                    <span className="w3-margin w3-text-dark-grey">
                                        {
                                            professor.research_title[
                                                i18n.language
                                            ]
                                        }
                                    </span>
                                </header>
                                <article>
                                    <h3 className="w3-text-teal">
                                        <Link
                                            to={`/faculty/${professor.user.name["en"]}`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            {professor.user.name[i18n.language]}
                                        </Link>
                                    </h3>
                                    <p className="featured__text w3-text-grey">
                                        {professor.research_text[i18n.language]}
                                    </p>
                                    <MoreButton
                                        type="large"
                                        to={`/faculty/${professor.user.name["en"]}`}
                                    ></MoreButton>
                                </article>
                            </div>
                        ))}
                </div>
            </section>
            <ContactForm />
        </PageWrapper>
    );
};
export default Landing;
