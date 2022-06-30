import React from "react";
import { useFetchPost } from "../../infrastructure/APIHandler";
import Loading from "../components/loading";
import NotFound from "../components/404";
import Layout from "../layouts/layout";
export const Post = () => {
    const title = "nasser";
    const featured = "featured";
    const { data, loading } = useFetchPost({
        title: title,
        category_id: 1,
    });
    const post = data[0];
    return loading ? (
        <Layout
            title="Loading..."
            header={<Loading />}
            keywords=""
            description=""
        ></Layout>
    ) : !post ? (
        <Layout
            title="404"
            header={<NotFound />}
            keywords=""
            description=""
        ></Layout>
    ) : (
        <Layout title="Home page" header={<></>} keywords="" description="">
            <article className="w3-container">
                <section>
                    <div className="w3-card-4">
                        <header className="w3-container w3-teal">
                            <h1 className="w3-center">{post.title.en}</h1>
                        </header>
                        <div
                            className="w3-container w3-padding"
                            style={{ width: "75%" }}
                        >
                            <img
                                src={post.image}
                                alt={post.slug}
                                className="w3-round w3-margin"
                            />
                            <p
                                className="w3-margin"
                                dangerouslySetInnerHTML={{
                                    __html: post.content.en,
                                }}
                            ></p>
                        </div>
                        <footer className="w3-container w3-light-grey">
                            {post.tags.map((tag) => (
                                <h5 className="w3-tag w3-teal w3-round">
                                    {tag}
                                </h5>
                            ))}
                        </footer>
                    </div>
                </section>
            </article>
        </Layout>
    );
};
export default Post;
