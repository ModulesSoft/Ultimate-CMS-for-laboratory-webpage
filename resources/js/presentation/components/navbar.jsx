import { useTranslation } from "react-i18next";
const Navbar = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.documentElement.setAttribute("lang", i18n.language);
        document.documentElement.setAttribute(
            "dir",
            i18n.language === "en" ? "ltr" : "rtl"
        );
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

    return (
        <nav>
            <div className="w3-bar w3-green">
                <div
                    className="w3-bar-item w3-button w3-hover-teal w3-light-green w3-padding-0"
                    style={i18n.language === "en" ? null : overrideBarItem}
                >
                    <button className="w3-button" onClick={openSidebar}>
                        ☰
                    </button>
                </div>
                <a
                    href="#"
                    className="w3-bar-item w3-button w3-hover-teal w3-teal"
                    style={i18n.language === "en" ? null : overrideBarItem}
                >
                    <i className="fa-solid fa-bread-slice" />
                    <span>Link 1</span>
                </a>
                <a
                    href="#"
                    className="w3-bar-item w3-button w3-hover-teal"
                    style={i18n.language === "en" ? null : overrideBarItem}
                >
                    <i className="fa-solid fa-bread-slice" />
                    <span>Link 2</span>
                </a>
                <a
                    href="#"
                    className="w3-bar-item w3-button w3-hover-teal"
                    style={i18n.language === "en" ? null : overrideBarItem}
                >
                    <i className="fa-solid fa-bread-slice" />
                    <span>Link 3</span>
                </a>
                <a
                    href="#"
                    className="w3-bar-item w3-button w3-hover-teal"
                    style={i18n.language === "en" ? null : overrideBarItem}
                >
                    <i className="fa-solid fa-bread-slice" />
                    <span>Link 4</span>
                </a>
                <a
                    href="#"
                    className="w3-bar-item w3-button w3-hover-teal"
                    style={i18n.language === "en" ? null : overrideBarItem}
                >
                    <i className="fa-solid fa-bread-slice" />
                    <span>Link 5</span>
                </a>
                <div
                    className="w3-bar-item w3-dropdown-hover w3-hover-teal w3-padding-0"
                    style={i18n.language === "en" ? null : overrideBarItem}
                >
                    <button className="w3-button">
                        <i className="fa-solid fa-flag" />
                        <span> language </span>
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
            </div>
        </nav>
    );
};
export default Navbar;
