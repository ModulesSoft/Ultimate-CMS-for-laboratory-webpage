import React from "react";
import { useFetchPosts } from "../../infrastructure/APIHandler";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getImageUri } from "../../application/common";
import PageWrapper from "../components/PageWrapper";
import Tags from "../components/Tags";

export const Post = () => {
    let { slug } = useParams();
    const { data, loading } = useFetchPosts({
        slug: slug,
    });
    const { i18n } = useTranslation();
    const post = data[0];
    return (
        <PageWrapper
            loading={loading}
            title=""
            header={post && post.title[i18n.language]}
            description=""
            keywords=""
        >
            {post && (
                <article className="w3-container w3-card-4">
                    <div
                        className="w3-container w3-padding"
                        style={{ width: "75%" }}
                    >
                        {post.image && (
                            <img
                                src={getImageUri(post.image)}
                                alt={post.slug}
                                className="w3-round w3-margin"
                                loading="lazy"
                            />
                        )}
                        <p
                            className="w3-margin"
                            dangerouslySetInnerHTML={{
                                __html: post.content[i18n.language],
                            }}
                        ></p>
                    </div>
                    <Tags tags={post.tags} />
                </article>
            )}
        </PageWrapper>
    );
};
export default Post;
