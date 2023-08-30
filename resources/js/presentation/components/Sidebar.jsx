import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
const Sidebar = ({ categories }) => {
    const closeSidebar = () => {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    };
    const { t, i18n } = useTranslation();
    const overrideTextAlign = {
        textAlign: "right",
    };
    const navClasses = (isActive) =>
        isActive
            ? "w3-text-teal w3-bar-item w3-button  w3-hover-teal"
            : "w3-bar-item w3-button  w3-hover-teal";
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
                    className="w3-green w3-bar-item w3-button w3-large w3-center"
                    onClick={closeSidebar}
                >
                    ×
                </button>
                <Link
                    to="/"
                    onClick={closeSidebar}
                    className="w3-bar-item w3-button w3-center w3-hover-none"
                >
                    <img
                        className="w3-large w3-mobile"
                        src="/images/logo.gif"
                        alt="logo"
                    />
                </Link>
                {categories[0] &&
                    categories.map((category) => (
                        <NavLink
                            onClick={closeSidebar}
                            key={category.id}
                            to={`/${category.slug}`}
                            className={({ isActive }) => navClasses(isActive)}
                            style={
                                i18n.language === "en"
                                    ? null
                                    : overrideTextAlign
                            }
                        >
                            <i
                                className={`sidebar__icon fa-solid ${category.icon}`}
                            />
                            <span className="w3-padding sidebar__text">
                                {category.name[i18n.language]}
                            </span>
                        </NavLink>
                    ))}
                <NavLink
                    to="/gallery"
                    onClick={closeSidebar}
                    className={({ isActive }) => navClasses(isActive)}
                    style={i18n.language === "en" ? null : overrideTextAlign}
                >
                    <i className="sidebar__icon fa-solid fa-image" />
                    <span className="w3-padding sidebar__text">
                        {t("gallery")}
                    </span>
                </NavLink>
                <NavLink
                    to="/faculty"
                    onClick={closeSidebar}
                    className={({ isActive }) => navClasses(isActive)}
                    style={i18n.language === "en" ? null : overrideTextAlign}
                >
                    <i className="sidebar__icon fa-solid fa-chalkboard-user"></i>
                    <span className="w3-padding sidebar__text">
                        {t("faculty")}
                    </span>
                </NavLink>
                <NavLink
                    to="/students"
                    onClick={closeSidebar}
                    className={({ isActive }) => navClasses(isActive)}
                    style={i18n.language === "en" ? null : overrideTextAlign}
                >
                    <i className="sidebar__icon fa-solid fa-book-open-reader"></i>
                    <span className="w3-padding sidebar__text">
                        {t("students")}
                    </span>
                </NavLink>
                <NavLink
                    to="/alumni"
                    onClick={closeSidebar}
                    className={({ isActive }) => navClasses(isActive)}
                    style={i18n.language === "en" ? null : overrideTextAlign}
                >
                    <i className="sidebar__icon fa-solid fa-user-graduate"></i>
                    <span className="w3-padding sidebar__text">
                        {t("alumni")}
                    </span>
                </NavLink>
            </div>
        </aside>
    );
};
export default Sidebar;
