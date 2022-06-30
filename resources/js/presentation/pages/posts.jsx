import Header from "../components/header";
import Layout from "../layouts/layout";
export const posts = () => (
    <Layout
        title="Posts"
        header={<Header h1="Posts" />}
        keywords="posts, articles"
        description="Posts page"
    >
        <article className="w3-container">
            <section>
                <div className="w3-card-4 w3-animate-left">
                    <header className="w3-container w3-light-grey w3-padding">
                        <div className="w3-container w3-cell w3-margin">
                            <img
                                src="https://www.w3schools.com/w3css/img_nature_wide.jpg"
                                alt=""
                                className="w3-round-large posts__thumbnail"
                            />
                        </div>
                        <div className="w3-container w3-cell w3-margin w3-animate-opacity">
                            <h2>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Tenetur, pariatur.
                            </h2>
                            <hr />
                            <p>category</p>
                        </div>
                    </header>
                    <div className="w3-container w3-padding">
                        <p className="w3-margin">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam deleniti fuga explicabo repudiandae
                            debitis provident fugit dolorum ex libero cumque!
                        </p>
                    </div>
                    <button className="w3-bar w3-button w3-teal">more</button>
                </div>
            </section>
            <section>
                <div className="w3-card-4 w3-animate-left">
                    <header className="w3-container w3-light-grey w3-padding">
                        <div className="w3-container w3-cell w3-margin">
                            <img
                                src="https://www.w3schools.com/w3css/img_nature_wide.jpg"
                                alt=""
                                className="w3-round-large posts__thumbnail"
                            />
                        </div>
                        <div className="w3-container w3-cell w3-margin w3-animate-opacity">
                            <h2>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Tenetur, pariatur.
                            </h2>
                            <hr />
                            <p>category</p>
                        </div>
                    </header>
                    <div className="w3-container w3-padding">
                        <p className="w3-margin">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam deleniti fuga explicabo repudiandae
                            debitis provident fugit dolorum ex libero cumque!
                        </p>
                    </div>
                    <button className="w3-bar w3-button w3-teal">more</button>
                </div>
            </section>
            <section>
                <div className="w3-card-4 w3-animate-left">
                    <header className="w3-container w3-light-grey w3-padding">
                        <div className="w3-container w3-cell w3-margin">
                            <img
                                src="https://www.w3schools.com/w3css/img_nature_wide.jpg"
                                alt=""
                                className="w3-round-large posts__thumbnail"
                            />
                        </div>
                        <div className="w3-container w3-cell w3-margin w3-animate-opacity">
                            <h2>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Tenetur, pariatur.
                            </h2>
                            <hr />
                            <p>category</p>
                        </div>
                    </header>
                    <div className="w3-container w3-padding">
                        <p className="w3-margin">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam deleniti fuga explicabo repudiandae
                            debitis provident fugit dolorum ex libero cumque!
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit
                            amet consectetur adipisicing elit. Quis, eveniet.
                        </p>
                    </div>
                    <button className="w3-bar w3-button w3-teal">more</button>
                </div>
            </section>
        </article>
    </Layout>
);
export default posts;
