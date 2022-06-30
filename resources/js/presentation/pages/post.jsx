import Layout from "../layouts/layout";
export const Post = () => (
    <Layout title="Home page" header={<></>} keywords="" description="">
        <article className="w3-container">
            <section>
                <div className="w3-card-4">
                    <header className="w3-container w3-teal">
                        <h1 className="w3-center">Header</h1>
                    </header>
                    <div
                        className="w3-container w3-padding"
                        style={{ width: "75%" }}
                    >
                        <img
                            src="https://www.w3schools.com/w3css/img_nature_wide.jpg"
                            alt=""
                            className="w3-round w3-margin"
                        />
                        <p className="w3-margin">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sed soluta necessitatibus nisi autem a facere
                            nemo quia dolorum, distinctio error reprehenderit
                            tenetur reiciendis. Soluta vel similique ex quae
                            ducimus odio tempore debitis, assumenda possimus
                            ipsum eaque suscipit, dicta placeat! Deleniti
                            excepturi aliquam culpa odio provident, veniam
                            tempora iusto a omnis? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Voluptatem eveniet
                            minima suscipit. Amet aspernatur eius suscipit enim
                            impedit velit modi ducimus minima fuga,
                            necessitatibus quod quibusdam optio culpa mollitia
                            error numquam vero consequuntur ipsa quos itaque
                            expedita. Deleniti unde temporibus quam. Voluptates,
                            aut sequi? Consectetur atque architecto perspiciatis
                            enim illum? Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Sunt odit dolorum magni aliquid id
                            deserunt maiores veritatis voluptate! Voluptatum
                            sapiente suscipit fuga omnis commodi quam explicabo
                            impedit quasi reiciendis, molestias rem animi sunt
                            mollitia autem quo? Molestiae ullam maiores autem.
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ratione repellendus ab corporis, ex quisquam
                            ea fuga temporibus accusamus, perspiciatis harum
                            quos? Ad laudantium dicta adipisci accusantium
                            molestias? Dolores optio commodi eveniet nobis
                            tempora aperiam autem expedita debitis sunt, tenetur
                            minus rerum et quidem sit officiis nisi accusamus,
                            animi excepturi voluptas. Cupiditate cumque quo
                            harum sit consectetur vel illo numquam nisi?
                        </p>
                    </div>
                    <footer className="w3-container w3-light-grey">
                        <h5 className="w3-tag w3-teal w3-round">keywords</h5>
                        <h5 className="w3-tag w3-teal w3-round">keywords</h5>
                        <h5 className="w3-tag w3-teal w3-round">keywords</h5>
                        <h5 className="w3-tag w3-teal w3-round">keywords</h5>
                        <h5 className="w3-tag w3-teal w3-round">keywords</h5>
                    </footer>
                </div>
            </section>
        </article>
    </Layout>
);
export default Post;
