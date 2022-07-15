import { useTranslation } from "react-i18next";
import { useFetchFooters } from "../../infrastructure/APIHandler";
import Loading from "./Loading";

const Footer = () => {
    const { data, loading } = useFetchFooters();
    const { i18n } = useTranslation();
    const columns = data;
    return loading ? (
        <Loading />
    ) : (
        <footer className="w3-margin-top">
            <div className="w3-cell w3-mobile-row">
                {columns &&
                    columns.map((column, index) => (
                        <div
                            key={column.id}
                            className={`w3-container ${
                                index === 1 ? "w3-black" : "w3-dark-grey"
                            } w3-cell w3-mobile`}
                        >
                            <article>
                                <h2
                                    className={`${
                                        index === 1
                                            ? "w3-text-teal"
                                            : "w3-text-light-blue"
                                    } w3-center`}
                                >
                                    {column.title[i18n.language]}
                                </h2>
                                <ul className="footer__items">
                                    {column.rows &&
                                        column.rows.map((row) => (
                                            <li key={row.id}>
                                                <a href={row.link}>
                                                    {row.base64_image && (
                                                        <img
                                                            src={
                                                                row.base64_image
                                                            }
                                                            alt=""
                                                            className={
                                                                i18n.language ===
                                                                "en"
                                                                    ? "footer__thumbnail"
                                                                    : "footer__thumbnail--rtl"
                                                            }
                                                        />
                                                    )}
                                                    <span className="w3-text-light-grey">
                                                        {
                                                            row.text[
                                                                i18n.language
                                                            ]
                                                        }
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </article>
                        </div>
                    ))}
            </div>
        </footer>
    );
};
export default Footer;
