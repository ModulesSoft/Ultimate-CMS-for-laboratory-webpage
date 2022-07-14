import { useFetchPosts } from "../../infrastructure/APIHandler";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export const posts = ({
    title,
    keywords,
    description,
    categoryId,
    categorySlug,
}) => {
    console.log("categoryId");
    const { data, loading } = useFetchPosts({
        categoryId: categoryId,
    });
    const posts = data;
    const { t, i18n } = useTranslation();
    return (
        <>
            <Helmet>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <title>{title}</title>
            </Helmet>
            <header>
                <Header h1={title} />
            </header>

            {loading ? (
                <Loading />
            ) : (
                <article className="w3-container">
                    {posts.map((post) => (
                        <section key={post.id}>
                            <div className="w3-card-4 w3-animate-left">
                                <header className="w3-container w3-light-grey w3-padding">
                                    <div className="w3-container w3-cell w3-margin">
                                        <img
                                            src={post.image}
                                            alt={post.slug}
                                            className="w3-round-large posts__thumbnail"
                                        />
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
                                    more
                                </Link>
                            </div>
                        </section>
                    ))}
                </article>
            )}
        </>
    );
};

export default posts;
