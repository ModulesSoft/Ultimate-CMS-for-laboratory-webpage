import { useFetchPosts } from "../../infrastructure/APIHandler";
import Header from "../components/header";
import Layout from "../layouts/layout";
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
    const found = posts[0] ? true : false;
    return (
        <Layout
            title="Posts"
            header={<Header h1={title} />}
            keywords={keywords}
            description={description}
            loading={loading}
            found={found}
        >
            <article className="w3-container">
                {found &&
                    posts.map((post) => (
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
                                        <h2>{post.title.en}</h2>
                                        <hr />
                                        <p>
                                            Last Update:
                                            <time
                                                className="w3-margin"
                                                dateTime={post.updated_at}
                                            >
                                                {new Date(
                                                    post.updated_at
                                                ).toDateString()}
                                            </time>
                                        </p>
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
                                <a
                                    href={`/${categorySlug}/${post.slug}`}
                                    className="w3-bar w3-button w3-teal"
                                >
                                    more
                                </a>
                            </div>
                        </section>
                    ))}
            </article>
        </Layout>
    );
};

export default posts;
