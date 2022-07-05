import Header from "../components/header";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export const Page = ({ title, description, keywords, data }) => {
    const { i18n } = useTranslation();
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
            <section>
                <article>
                    <div className="w3-row w3-margin">
                        <header>
                            <p
                                className="w3-row w3-padding w3-blue-grey"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        data.introduction &&
                                        data.introduction[i18n.language],
                                }}
                            ></p>
                        </header>
                        <p>...sections....</p>
                        <footer>
                            <p
                                className="w3-row w3-padding w3-teal"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        data.conclusion &&
                                        data.conclusion[i18n.language],
                                }}
                            ></p>
                        </footer>
                    </div>
                </article>
            </section>
        </>
    );
};
export default Page;
