import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Tags = ({ tags }) => {
    const { i18n, t } = useTranslation();
    console.log(tags);
    return (
        tags[0] && (
            <footer className="w3-container">
                <p className="w3-text-grey">{t("keywords")}</p>
                {tags.map((tag) => (
                    <Link key={tag.id} to={"/tags/" + tag.keyword.en}>
                        <h5 className="w3-tag w3-teal w3-round w3-small">
                            {tag.keyword[i18n.language] ??
                                t("translation not found")}
                        </h5>
                    </Link>
                ))}
            </footer>
        )
    );
};
export default Tags;
