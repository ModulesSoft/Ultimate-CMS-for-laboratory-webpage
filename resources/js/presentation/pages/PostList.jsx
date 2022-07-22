import { useFetchPosts } from "../../infrastructure/APIHandler";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getThumbUri } from "../../application/common";
import PageWrapper from "../components/PageWrapper";

export const posts = ({
    title,
    keywords,
    description,
    categoryId,
    categorySlug,
}) => {
    const { data, loading } = useFetchPosts({
        categoryId: categoryId,
    });
    const posts = data;
    const { t, i18n } = useTranslation();
    return (
        <PageWrapper
            description={description}
            keywords={keywords}
            title={title}
            loading={loading}
        >
            <Header h1={title} />

            <article className="w3-container">
                {posts[0] &&
                    posts.map((post) => (
                        <section key={post.id}>
                            <div className="w3-card-4 w3-animate-left">
                                <header className="w3-container w3-light-grey w3-padding">
                                    <div className="w3-container w3-cell w3-margin">
                                        {post.image && (
                                            <img
                                                src={getThumbUri(
                                                    "150x150",
                                                    post.image
                                                )}
                                                alt={post.slug}
                                                className="w3-round-large posts__thumbnail"
                                                loading="lazy"
                                            />
                                        )}
                                    </div>
                                    <div className="w3-container w3-cell w3-margin w3-animate-opacity">
                                        <h2>{post.title[i18n.language]}</h2>
                                        <hr />
                                        <p>
                                            {t("last update")}
                                            <time
                                                className="w3-margin"
                                                dateTime={post.updated_at}
                                            >
                                                {new Date(
                                                    post.updated_at
                                                ).toLocaleDateString(
                                                    i18n.language.replace(
                                                        "_",
                                                        "-"
                                                    )
                                                )}
                                            </time>
                                        </p>
                                    </div>
                                </header>
                                <div className="w3-container w3-padding">
                                    <p
                                        className="w3-margin"
                                        dangerouslySetInnerHTML={{
                                            __html: post.content[i18n.language],
                                        }}
                                    ></p>
                                </div>
                                <Link
                                    to={`/${categorySlug}/${post.slug}`}
                                    className="w3-bar w3-button w3-teal"
                                >
                                    {t("more")}
                                </Link>
                            </div>
                        </section>
                    ))}
            </article>
        </PageWrapper>
    );
};

export default posts;
