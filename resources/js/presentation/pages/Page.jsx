import { useTranslation } from "react-i18next";
import PageWrapper from "../components/PageWrapper";
import { extractKeywords } from "../../application/common";
export const Page = ({ title, data }) => {
    const { i18n } = useTranslation();
    const description = title + " - " + data.introduction[i18n.language];
    const keywords = extractKeywords(data.sections, i18n.language);
    return (
        <PageWrapper
            description={description}
            keywords={keywords}
            title={title}
            header={title}
        >
            <article>
                {data.id && (
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
                        <h3
                            className="w3-container w3-padding w3-teal"
                            style={{ marginBottom: 0 }}
                            dangerouslySetInnerHTML={{
                                __html: data.conclusion[i18n.language],
                            }}
                        ></h3>
                        <div className="w3-black">
                            <br />
                        </div>
                    </footer>
                )}
            </article>
        </PageWrapper>
    );
};
export default Page;
