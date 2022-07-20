import { useTranslation } from "react-i18next";
import {
    useFetchFooters,
    useFetchSetting,
} from "../../infrastructure/APIHandler";

const Footer = () => {
    let { data, loading } = useFetchFooters();
    const { i18n } = useTranslation();
    const columns = data;
    ({ data, loading } = useFetchSetting({ key: "copyright" }));
    const copyright = data.value;
    return (
        !loading && (
            <footer className="w3-margin-top">
                <div className="w3-row">
                    {columns &&
                        columns.map((column, index) => (
                            <div
                                key={column.id}
                                className={`w3-mobile w3-cell w3-padding ${
                                    index === 1 ? "w3-black" : "w3-dark-grey"
                                }
                              `}
                                style={{
                                    width: (1 / columns.length) * 100 + "%",
                                }}
                            >
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
                            </div>
                        ))}
                </div>
                <div className="w3-dark-grey w3-row w3-mobile w3-center">
                    <p className="w3-black w3-padding" style={{ margin: 0 }}>
                        {copyright && copyright[i18n.language]}
                    </p>
                </div>
            </footer>
        )
    );
};
export default Footer;
