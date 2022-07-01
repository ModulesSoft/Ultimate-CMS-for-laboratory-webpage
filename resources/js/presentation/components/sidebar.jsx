import { useFetchCategories } from "../../infrastructure/APIHandler";

const Sidebar = () => {
    const closeSidebar = () => {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        // document.getElementById("openNav").style.display = "inline-block";
    };

    const { data, loading } = useFetchCategories({});
    const categories = data;
    const found = categories[0] ? true : false;
    return (
        <aside>
            <div
                className="w3-sidebar w3-bar-block w3-card w3-animate-left"
                style={{ display: "none", top: 0 }}
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
                            href={`/${category.slug.en}`}
                            className="w3-bar-item w3-button"
                        >
                            <i className={`fa-solid ${category.icon}`} />
                            <span className="w3-padding ">
                                {category.name.en}
                            </span>
                        </a>
                    ))}
            </div>
        </aside>
    );
};
export default Sidebar;
