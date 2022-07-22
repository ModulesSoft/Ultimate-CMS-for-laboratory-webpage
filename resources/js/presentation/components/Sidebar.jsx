import { useFetchCategories } from "../../infrastructure/APIHandler";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
    const closeSidebar = () => {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    };
    const { data, loading } = useFetchCategories({});
    const categories = data;
    const found = categories[0] ? true : false;
    const { t, i18n } = useTranslation();
    const overrideTextAlign = {
        textAlign: "right",
    };
    const navClasses = (isActive) =>
        isActive
            ? "w3-text-teal w3-bar-item w3-button"
            : "w3-bar-item w3-button";
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
                <Link
                    to="/"
                    className="w3-bar-item w3-button w3-center w3-hover-none"
                >
                    <img
                        className="w3-large w3-mobile"
                        src="/images/logo.gif"
                        alt="logo"
                    />
                </Link>
                {found &&
                    categories.map((category) => (
                        <NavLink
                            key={category.id}
                            to={`/${category.slug}`}
                            className={({ isActive }) => navClasses(isActive)}
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
                        </NavLink>
                    ))}
                <NavLink
                    to="/gallery"
                    className={({ isActive }) => navClasses(isActive)}
                    style={i18n.language === "en" ? null : overrideTextAlign}
                >
                    <i className={`fa-solid fa-image`} />
                    <span className="w3-padding ">{t("gallery")}</span>
                </NavLink>

                <NavLink
                    to="/faculty"
                    className={({ isActive }) => navClasses(isActive)}
                    style={i18n.language === "en" ? null : overrideTextAlign}
                >
                    <i className="fa-solid fa-chalkboard-user"></i>
                    <span className="w3-padding ">{t("faculty")}</span>
                </NavLink>
                <NavLink
                    to="/students"
                    className={({ isActive }) => navClasses(isActive)}
                    style={i18n.language === "en" ? null : overrideTextAlign}
                >
                    <i className="fa-solid fa-book-open-reader"></i>
                    <span className="w3-padding ">{t("students")}</span>
                </NavLink>
            </div>
        </aside>
    );
};
export default Sidebar;
