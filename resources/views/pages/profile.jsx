import Layout from "./layout";
export const Profile = () => (
    <Layout title="profile" header={<></>} keywords="" description="">
        <section>
            <div className="w3-card-4 w3-center w3-padding w3-mobile">
                <a href="#">
                    <img
                        src="https://www.w3schools.com/w3css/img_avatar3.png"
                        alt="Alps"
                        className="w3-left w3-round profile__thumbnail"
                    />
                </a>
                <div className="w3-container w3-right w3-margin">
                    <h3 className="w3-left w3-green w3-round w3-badge">
                        MSc Student
                    </h3>
                    <hr />
                    <strong>Supervisor: Jane Doe</strong>
                </div>
                <div className="w3-container">
                    <article>
                        <h2>
                            Reasearch Title: Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Id illo similique
                            aliquid consequatur quo deserunt ab dignissimos at
                            atque, ratione necessitatibus esse distinctio odit
                            perspiciatis maiores tempore doloribus totam modi?
                        </h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minima repellendus fugiat, voluptatum suscipit
                            vel inventore excepturi quisquam impedit minus
                            explicabo ducimus eligendi non molestias labore iure
                            eos placeat provident ut dolore, dolor mollitia
                            magni voluptatibus delectus? Impedit, reiciendis
                            natus asperiores ad ab error. Id qui tempora omnis
                            magni recusandae velit!
                        </p>
                        <hr />
                        <footer className="w3-container">
                            <h5 className="w3-tag w3-teal w3-round">
                                keywords
                            </h5>
                            <h5 className="w3-tag w3-teal w3-round">
                                keywords
                            </h5>
                            <h5 className="w3-tag w3-teal w3-round">
                                keywords
                            </h5>
                            <h5 className="w3-tag w3-teal w3-round">
                                keywords
                            </h5>
                            <h5 className="w3-tag w3-teal w3-round">
                                keywords
                            </h5>
                        </footer>
                    </article>
                </div>
            </div>
        </section>
    </Layout>
);
export default Profile;
