const Navbar = () => {
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
                    className="w3-bar-item w3-button w3-hover-teal w3-light-green"
                    style={{ padding: 0 }}
                >
                    <button className="w3-button" onClick={openSidebar}>
                        ☰
                    </button>
                </div>
                <a
                    href="#"
                    className="w3-bar-item w3-button w3-hover-teal w3-teal"
                >
                    <i className="fa-solid fa-bread-slice" />
                    <span>Link 1</span>
                </a>
                <a href="#" className="w3-bar-item w3-button w3-hover-teal">
                    <i className="fa-solid fa-bread-slice" />
                    <span>Link 2</span>
                </a>
                <a href="#" className="w3-bar-item w3-button w3-hover-teal">
                    <i className="fa-solid fa-bread-slice" />
                    <span>Link 3</span>
                </a>
                <a href="#" className="w3-bar-item w3-button w3-hover-teal">
                    <i className="fa-solid fa-bread-slice" />
                    <span>Link 4</span>
                </a>
                <a href="#" className="w3-bar-item w3-button w3-hover-teal">
                    <i className="fa-solid fa-bread-slice" />
                    <span>Link 5</span>
                </a>
                <div
                    className="w3-bar-item w3-dropdown-hover w3-hover-teal"
                    style={{ padding: 0 }}
                >
                    <button className="w3-button">
                        <i className="fa-solid fa-flag" />
                        <span> language </span>
                        <i className="fa-solid fa-caret-down" />
                    </button>
                    <div className="w3-dropdown-content w3-bar-block w3-card-4">
                        <a
                            href="#"
                            className="w3-bar-item w3-button w3-hover-teal"
                        >
                            Link 1
                        </a>
                        <a
                            href="#"
                            className="w3-bar-item w3-button w3-hover-teal"
                        >
                            Link 2
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
