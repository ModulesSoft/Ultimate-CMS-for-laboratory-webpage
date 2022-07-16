import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";

export const Page = ({ title, description, keywords, data }) => {
    const { i18n } = useTranslation();
    return (
        <PageWrapper
            description={description}
            keywords={keywords}
            title={title}
        >
            <Header h1={title} />
            <article>
                {data.introduction && (
                    <section style={{ marginTop: 0 }}>
                        <div
                            className="w3-container w3-blue-grey"
                            dangerouslySetInnerHTML={{
                                __html: data.introduction[i18n.language],
                            }}
                        ></div>
                    </section>
                )}
                {data.sections &&
                    data.sections.map((section) => (
                        <section key={section.id} className="w3-container">
                            <h3>
                                {section.icon && (
                                    <i className={section.icon}></i>
                                )}
                                <span className="w3-margin">
                                    {section.title[i18n.language]}
                                </span>
                            </h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        section.content &&
                                        section.content[i18n.language],
                                }}
                            ></div>
                        </section>
                    ))}
                {data.conclusion && (
                    <footer>
                        <div
                            className="w3-container w3-teal"
                            dangerouslySetInnerHTML={{
                                __html: data.conclusion[i18n.language],
                            }}
                        ></div>
                    </footer>
                )}
            </article>
        </PageWrapper>
    );
};
export default Page;
