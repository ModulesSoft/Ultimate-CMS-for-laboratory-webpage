import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const moreButton = ({ to, type }) => {
    const { t, i18n } = useTranslation();
    return type === "large" ? (
        <Link to={to} className="w3-button w3-block w3-teal w3-round">
            {t("more")}
        </Link>
    ) : (
        <div className="w3-padding" style={{ textAlign: "center" }}>
            <Link
                to={to}
                className="w3-button w3-border w3-border-teal w3-hover-teal w3-text-teal"
                style={{ borderRadius: "5px", width: "10%", minWidth: "100px" }}
            >
                {t("more")}
            </Link>
        </div>
    );
};
export default moreButton;
