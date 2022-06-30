const Navbar = ()=>(
    <nav>
        <div className="w3-bar w3-green">
          <button className="w3-bar-item w3-button" onClick="w3_open()">
            ☰
          </button>
          <a href="#" className="w3-bar-item w3-button w3-hover-teal w3-teal">
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
          <div className="w3-bar-item w3-dropdown-hover w3-hover-teal">
            <button className="w3-button" style={{ padding: 0 }}>
              <i className="fa-solid fa-flag" />
              <span> language </span>
              <i className="fa-solid fa-caret-down" />
            </button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
              <a href="#" className="w3-bar-item w3-button w3-hover-teal">
                Link 1
              </a>
              <a href="#" className="w3-bar-item w3-button w3-hover-teal">
                Link 2
              </a>
            </div>
          </div>
        </div>
      </nav>
)
export default Navbar;