import { useFetchPosts } from "../../infrastructure/APIHandler";
import { useTranslation } from "react-i18next";
import { getThumbUri } from "../../application/common";
import PageWrapper from "../components/PageWrapper";
import { useParams } from "react-router-dom";
import { extractKeywords } from "../../application/common";
import MoreButton from "../components/MoreButton";
export const posts = ({ categoryId }) => {
    const { t, i18n } = useTranslation();
    const { tag } = useParams();
    const { data, loading } = useFetchPosts({
        categoryId: categoryId,
        tag: tag,
    });
    const posts = data;
    const title = tag
        ? t("keywords") + ": " + tag
        : posts[0] && posts[0].category.name[i18n.language];
    const description = title;
    const keywords = posts[0] && extractKeywords(posts, i18n.language);
    return (
        <PageWrapper
            description={description}
            keywords={keywords}
            title={title}
            header={title ? title : tag}
            loading={loading}
        >
            <article className="w3-container w3-margin-bottom">
                {posts[0] &&
                    posts.map((post) => (
                        <section key={post.id}>
                            <div className="w3-card-4 w3-animate-left w3-margin-bottom">
                                <header className="w3-row w3-light-grey w3-padding w3-animate-opacity">
                                    {post.image && (
                                        <div className="posts__thumbnail w3-col s3 w3-mobile w3-margin-top w3-margin-bottom">
                                            <img
                                                src={getThumbUri(
                                                    "150x150",
                                                    post.image
                                                )}
                                                alt={post.slug}
                                                className="w3-round-large"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                    <div className="w3-col s8 w3-mobile">
                                        <h4>{post.title[i18n.language]}</h4>
                                        <hr />
                                        <div>
                                            <span>{t("last update")}</span>
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
                                        </div>
                                    </div>
                                </header>
                                <div className="w3-container w3-padding">
                                    <p
                                        className="posts__text w3-margin"
                                        dangerouslySetInnerHTML={{
                                            __html: post.content[i18n.language],
                                        }}
                                    ></p>
                                </div>
                                <MoreButton
                                    to={`/${post.category.slug}/${post.slug}`}
                                ></MoreButton>
                            </div>
                        </section>
                    ))}
            </article>
        </PageWrapper>
    );
};

export default posts;
