import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const Navbar = ({ pages }) => {
    const { i18n, t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng, () => {
            document.documentElement.setAttribute("lang", i18n.language);
            document.documentElement.setAttribute(
                "dir",
                i18n.language === "en" ? "ltr" : "rtl"
            );
        });
    };

    const overrideBarItem = {
        textAlign: "right",
        float: "right",
    };
    const openSidebar = () => {
        // document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "inline-block";
    };
    const navClasses = (isActive) =>
        isActive
            ? "w3-teal w3-bar-item w3-button w3-hover-teal w3-hover-teal"
            : "w3-bar-item w3-button w3-hover-teal w3-hover-teal";
    return (
        pages[0] && (
            <nav className="sticky">
                <div className="w3-bar w3-green navbar">
                    <div
                        className="w3-bar-item w3-button w3-hover-teal w3-light-green w3-padding-0"
                        style={i18n.language === "en" ? null : overrideBarItem}
                    >
                        <button className="w3-button" onClick={openSidebar}>
                            ☰
                        </button>
                    </div>
                    <div
                        className="navbar__pages--dropdown w3-bar-item w3-dropdown-hover w3-hover-teal w3-padding-0"
                        style={i18n.language === "en" ? null : overrideBarItem}
                    >
                        <button className="w3-button">
                            <i className="fa-solid fa-scroll" />
                            <span> {t("pages")} </span>
                            <i className="fa-solid fa-caret-down" />
                        </button>
                        <div className="w3-dropdown-content w3-bar-block w3-card-4">
                            {pages.map((page, key) => (
                                <NavLink
                                    key={key}
                                    to={"/page/" + page.slug}
                                    className={({ isActive }) =>
                                        navClasses(isActive)
                                    }
                                    style={
                                        i18n.language === "en"
                                            ? null
                                            : overrideBarItem
                                    }
                                >
                                    {page.name[i18n.language]}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="navbar__pages">
                        {pages.map((page, key) => (
                            <NavLink
                                key={key}
                                to={"/page/" + page.slug}
                                className={({ isActive }) =>
                                    navClasses(isActive)
                                }
                                style={
                                    i18n.language === "en"
                                        ? null
                                        : overrideBarItem
                                }
                            >
                                {/* <i className="fa-solid fa-bread-slice" /> */}
                                <span>{page.name[i18n.language]}</span>
                            </NavLink>
                        ))}
                    </div>
                    <div
                        className="w3-bar-item w3-dropdown-hover w3-hover-teal w3-padding-0"
                        style={i18n.language === "en" ? null : overrideBarItem}
                    >
                        <button className="w3-button">
                            <i className="fa-solid fa-flag" />
                            <span> {t("language")} </span>
                            <i className="fa-solid fa-caret-down" />
                        </button>
                        <div className="w3-dropdown-content w3-bar-block w3-card-4">
                            <a
                                onClick={() => changeLanguage("en")}
                                href="#"
                                className="w3-bar-item w3-button w3-hover-teal"
                            >
                                English
                            </a>
                            <a
                                onClick={() => changeLanguage("fa_IR")}
                                href="#"
                                className="w3-bar-item w3-button w3-hover-teal"
                            >
                                فارسی
                            </a>
                        </div>
                    </div>
                    <a
                        href="/admin"
                        className={
                            "w3-bar-item w3-button w3-teal w3-border-left w3-border-right w3-border-blue  w3-hover-blue " +
                            (i18n.language === "en" ? "w3-right" : "w3-left")
                        }
                        style={i18n.language === "en" ? null : overrideBarItem}
                    >
                        <i className="fa-solid fa-user" />
                        <span> {t("login")}</span>
                    </a>
                </div>
            </nav>
        )
    );
};
export default Navbar;
