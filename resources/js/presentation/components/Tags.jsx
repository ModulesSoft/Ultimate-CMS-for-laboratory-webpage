import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Tags = ({ tags }) => {
    const { i18n,t } = useTranslation();
    return (
        tags && (
            <footer className="w3-container">
                <hr />
                <p className="w3-text-grey">{t("keywords")}</p>
                {tags.map((tag) => (
                    <Link
                        key={tag.id}
                        to={"/tags/" + tag.keyword.en}
                    >
                        <h5 className="w3-tag w3-teal w3-round w3-small">
                            {tag.keyword[i18n.language]??t('translation not found')}
                        </h5>
                    </Link>
                ))}
            </footer>
        )
    );
};
export default Tags;
