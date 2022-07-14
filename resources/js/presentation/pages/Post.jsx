import React from "react";
import { useFetchPost } from "../../infrastructure/APIHandler";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { getImageUri } from "../../application/common";

export const Post = () => {
    let { slug } = useParams();
    const { data, loading } = useFetchPost({
        slug: slug,
    });
    const { i18n } = useTranslation();
    const post = data[0];
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Helmet>
                        <meta name="description" content={""} />
                        <meta name="keywords" content={""} />
                        <title>{""}</title>
                    </Helmet>
                    {/* <header>
                        <Header h1={post.title.en} />
                    </header> */}
                    <article className="w3-container">
                        <section>
                            <div className="w3-card-4">
                                <header className="w3-container w3-teal">
                                    <h1 className="w3-center">
                                        {post.title[i18n.language]}
                                    </h1>
                                </header>
                                <div
                                    className="w3-container w3-padding"
                                    style={{ width: "75%" }}
                                >
                                    <img
                                        src={getImageUri(post.image)}
                                        alt={post.slug}
                                        className="w3-round w3-margin"
                                    />
                                    <p
                                        className="w3-margin"
                                        dangerouslySetInnerHTML={{
                                            __html: post.content[i18n.language],
                                        }}
                                    ></p>
                                </div>
                                <footer className="w3-container w3-light-grey">
                                    {post.tags.map((tag, index) => (
                                        <h5
                                            key={index}
                                            className="w3-tag w3-teal w3-round"
                                        >
                                            {tag}
                                        </h5>
                                    ))}
                                </footer>
                            </div>
                        </section>
                    </article>
                </>
            )}
        </>
    );
};
export default Post;
