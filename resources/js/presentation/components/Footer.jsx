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
                    columns.map((column) => (
                        <div
                            key={column.id}
                            className="w3-container w3-dark-grey w3-cell w3-mobile"
                        >
                            <article>
                                <h2 className="w3-text-light-blue w3-center">
                                    {column.title[i18n.language]}
                                </h2>
                                <ul>
                                    {column.rows &&
                                        column.rows.map((row) => (
                                            <li key={row.id}>
                                                <a href={row.link}>
                                                    <img
                                                        src={row.base64_image}
                                                        alt=""
                                                        className="footer__thumbnail"
                                                    />
                                                    <span>
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
