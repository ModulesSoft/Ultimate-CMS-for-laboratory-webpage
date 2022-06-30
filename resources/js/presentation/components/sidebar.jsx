const Sidebar = () => (
    <aside>
        <div
            className="w3-sidebar w3-bar-block w3-card w3-animate-left"
            style={{ display: "none", top: 0 }}
            id="mySidebar"
        >
            <button
                className="w3-bar-item w3-button w3-large w3-center"
                onClick="w3_close()"
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
            <a href="#" className="w3-bar-item w3-button">
                <i className="fa-solid fa-bread-slice" />
                <span>Link 1</span>
            </a>
            <a href="#" className="w3-bar-item w3-button">
                <i className="fa-solid fa-bread-slice" />
                <span>Link 2</span>
            </a>
            <a href="#" className="w3-bar-item w3-button">
                <i className="fa-solid fa-bread-slice" />
                <span>Link 3</span>
            </a>
        </div>
    </aside>
);
export default Sidebar;
