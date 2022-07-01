import { useFetchPosts } from "../../infrastructure/APIHandler";
import NotFound from "../components/404";
import Header from "../components/header";
import Loading from "../components/loading";
import Layout from "../layouts/layout";
export const posts = ({ title, keywords, description, categoryId }) => {
    const { data, loading } = useFetchPosts({
        categoryId: categoryId,
    });
    const posts = data;
    return loading ? (
        <Layout
            title="Loading..."
            header={<Loading />}
            keywords=""
            description=""
        ></Layout>
    ) : !posts ? (
        <Layout
            title="404"
            header={<NotFound />}
            keywords=""
            description=""
        ></Layout>
    ) : (
        <Layout
            title="Posts"
            header={<Header h1={title} />}
            keywords={keywords}
            description={description}
        >
            <article className="w3-container">
                {posts.map((post) => (
                    <section>
                        <div className="w3-card-4 w3-animate-left">
                            <header className="w3-container w3-light-grey w3-padding">
                                <div className="w3-container w3-cell w3-margin">
                                    <img
                                        src={post.image}
                                        alt=""
                                        className="w3-round-large posts__thumbnail"
                                    />
                                </div>
                                <div className="w3-container w3-cell w3-margin w3-animate-opacity">
                                    <h2>{post.title.en}</h2>
                                    <hr />
                                    <p>{title}</p>
                                </div>
                            </header>
                            <div className="w3-container w3-padding">
                                <p
                                    className="w3-margin"
                                    dangerouslySetInnerHTML={{
                                        __html: post.content.en,
                                    }}
                                ></p>
                            </div>
                            <button className="w3-bar w3-button w3-teal">
                                more
                            </button>
                        </div>
                    </section>
                ))}
            </article>
        </Layout>
    );
};

export default posts;
