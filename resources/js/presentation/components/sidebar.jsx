import { useFetchCategories } from "../../infrastructure/APIHandler";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
    const closeSidebar = () => {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    };
    const { data, loading } = useFetchCategories({});
    const categories = data;
    const found = categories[0] ? true : false;
    const { i18n } = useTranslation();
    const overrideTextAlign = {
        textAlign: "right",
    };
    return (
        <aside>
            <div
                className={`w3-sidebar w3-bar-block w3-card ${
                    i18n.language === "en"
                        ? "w3-animate-left"
                        : "w3-animate-right"
                }`}
                style={{ display: "none", top: 0, zIndex: 10 }}
                id="mySidebar"
            >
                <button
                    className="w3-bar-item w3-button w3-large w3-center"
                    onClick={closeSidebar}
                >
                    ×
                </button>
                <a
                    href="/"
                    className="w3-bar-item w3-button w3-center w3-hover-none"
                >
                    <img
                        className="w3-large w3-mobile"
                        src="/images/logo.gif"
                        alt="logo"
                    />
                </a>
                {found &&
                    categories.map((category) => (
                        <a
                            key={category.id}
                            href={`/${category.slug[i18n.language]}`}
                            className="w3-bar-item w3-button"
                            style={
                                i18n.language === "en"
                                    ? null
                                    : overrideTextAlign
                            }
                        >
                            <i className={`fa-solid ${category.icon}`} />
                            <span className="w3-padding ">
                                {category.name[i18n.language]}
                            </span>
                        </a>
                    ))}
            </div>
        </aside>
    );
};
export default Sidebar;
