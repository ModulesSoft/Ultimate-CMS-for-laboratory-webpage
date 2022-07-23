import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Tags = ({ tags }) => {
    const { i18n } = useTranslation();
    return (
        tags && (
            <footer className="w3-container">
                {tags.map((tag) => (
                    <Link
                        className="w3-padding"
                        key={tag.id}
                        to={"/tags/" + tag.keyword.en}
                    >
                        <h5 className="w3-tag w3-teal w3-round">
                            {tag.keyword[i18n.language]}
                        </h5>
                    </Link>
                ))}
            </footer>
        )
    );
};
export default Tags;
