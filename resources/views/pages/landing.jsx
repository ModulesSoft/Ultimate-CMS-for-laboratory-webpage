export const Landing = () => (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="Laboratory" />
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link href="css/app.css" rel="stylesheet" />
      <title>Lorem ipsum dolor sit.</title>
      <nav>
        <div className="w3-bar w3-green">
          <button className="w3-bar-item w3-button" onclick="w3_open()">
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
      <header>
        <div className="header w3-center">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </header>
      {/* Sidebar */}
      <main>
        <aside>
          <div
            className="w3-sidebar w3-bar-block w3-card w3-animate-left"
            style={{ display: "none", top: 0 }}
            id="mySidebar"
          >
            <button
              className="w3-bar-item w3-button w3-large w3-center"
              onclick="w3_close()"
            >
              ×
            </button>
            <a href="/" className="w3-bar-item w3-button w3-center w3-hover-none">
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
        {/* Overlay */}
        <div
          className="w3-overlay"
          onclick="w3_close()"
          style={{ cursor: "pointer" }}
          id="myOverlay"
        />
        <div id="main" className="w3-container">
          <section id="slideshow">
            {/* <h2 class="w3-text-dark-grey">
                    <i class="fa-solid fa-photo-film"></i>
                    slideshow
                </h2> */}
            <div className="slideshow w3-content">
              <img
                className="slideshow__image w3-round"
                src="https://www.w3schools.com/w3css/img_nature_wide.jpg"
                style={{ width: "100%" }}
              />
              <div className="w3-row-padding w3-section">
                <div className="w3-col s4">
                  <img
                    className="slideshow__thumbnail demo w3-opacity w3-round"
                    src="https://www.w3schools.com/w3css/img_nature_wide.jpg"
                    style={{ width: "100%" }}
                    onclick="currentDiv(1)"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="featured-2">
            <div className="featured featured--color-background w3-light-grey">
              <h2 className="w3-text-dark-grey">
                <i className="fa-solid fa-star" />
                featured 2
              </h2>
              <div className="w3-cell w3-mobile-row">
                <div className="w3-container w3-round-large w3-cell w3-mobile w3-border">
                  <div className="w3-light-grey w3-padding w3-margin w3-round-large">
                    <article>
                      <h2>Post Title</h2>
                      <hr />
                      <p className="w3-text-dark-grey">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Consectetur ipsa at delectus sed, aspernatur asperiores
                        molestiae nulla maxime laborum nemo.
                      </p>
                    </article>
                    <button className="w3-button w3-block w3-teal w3-round">
                      more
                    </button>
                  </div>
                </div>
                <div className="w3-container w3-round-large w3-cell w3-mobile w3-border">
                  <div className="w3-light-grey w3-padding w3-margin w3-round-large">
                    <article>
                      <h2>Post Title</h2>
                      <hr />
                      <p className="w3-text-dark-grey">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Consectetur ipsa at dolorum ducimus tempore laboriosam
                        sunt? Similique corrupti aperiam minus suscipit quis
                        cumque tenetur aliquid et dignissimos.
                      </p>
                    </article>
                    <button className="w3-button w3-block w3-teal w3-round">
                      more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="featured-3">
            <div className="featured featured--image-background">
              <h2 className="w3-text-dark-grey">
                <i className="fa-solid fa-star" />
                featured 3
              </h2>
              <div className="w3-cell w3-mobile-row">
                <div className="w3-container w3-round-large w3-cell w3-mobile">
                  <div className="w3-light-grey w3-padding w3-margin w3-round-large">
                    <article>
                      <h2 className="w3-text-dark-grey">Post Title</h2>
                      <hr />
                      <p className="w3-text-dark-grey">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Consectetur ipsa at delectus sed, aspernatur asperiores
                        molestiae nulla maxime laborum nemo.
                      </p>
                    </article>
                    <button className="w3-button w3-block w3-teal w3-round">
                      more
                    </button>
                  </div>
                </div>
                <div className="w3-container w3-round-large w3-cell w3-mobile">
                  <div className="w3-light-grey w3-padding w3-margin w3-round-large">
                    <article>
                      <h2>Post Title</h2>
                      <hr />
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Consectetur ipsa at delectus sed, aspernatur asperiores
                        molestiae nulla maxime laborum nemo.
                      </p>
                    </article>
                    <button className="w3-button w3-block w3-teal w3-round">
                      more
                    </button>
                  </div>
                </div>
                <div className="w3-container w3-round-large w3-cell w3-mobile">
                  <div className="w3-light-grey w3-padding w3-margin w3-round-large">
                    <article>
                      <h2 className="w3-text-dark-grey">Post Title</h2>
                      <hr />
                      <p className="w3-text-dark-grey">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Consectetur ipsa at delectus sed, aspernatur asperiores
                        molestiae nulla maxime laborum nemo.
                      </p>
                    </article>
                    <button className="w3-button w3-block w3-teal w3-round">
                      more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="people">
            <h2
              className="w3-text-dark-grey w3-light-blue w3-panel w3-padding"
              style={{ marginBottom: 0 }}
            >
              <i className="fa-solid fa-star" />
              Lorem ipsum dolor sit.
            </h2>
            <div className="w3-cell w3-mobile-row">
              <div className="w3-cell w3-mobile w3-light-grey w3-card-4 w3-padding w3-round">
                <header>
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    className="w3-round"
                    style={{ width: 50, height: 50 }}
                  />
                  <span className="w3-margin w3-text-dark-grey">
                    Lorem, ipsum.
                  </span>
                </header>
                <article>
                  <h2 className="w3-text-dark-grey">Lorem ipsum dolor sit.</h2>
                  <p className="w3-text-grey">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nisi, quisquam est. Optio earum, veniam quod facere saepe eum
                    necessitatibus dolore rerum minus.
                  </p>
                </article>
              </div>
              <div className="w3-cell w3-mobile w3-light-grey w3-card-4 w3-padding w3-round">
                <header>
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    className="w3-round"
                    style={{ width: 50, height: 50 }}
                  />
                  <span className="w3-margin w3-text-dark-grey">
                    Lorem, ipsum.
                  </span>
                </header>
                <article>
                  <h2 className="w3-text-dark-grey">Lorem ipsum dolor sit.</h2>
                  <p className="w3-text-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                    nulla qui fuga molestias eius provident, eos, voluptates
                    consequatur magni ipsam quos a maiore
                  </p>
                </article>
              </div>
            </div>
          </section>
          <section id="contact">
            <div className="w3-padding-large w3-light-grey">
              <h2 className="w3-text-dark-grey">
                <i className="fa-solid fa-star" />
                Contact us
              </h2>
              <div className="w3-row w3-center">
                <div className="w3-third w3-dark-grey w3-padding-24">
                  <i className="fa fa-envelope w3-xxlarge w3-text-light-grey" />
                  <p>John@doe.com</p>
                </div>
                <div className="w3-third w3-teal w3-padding-24">
                  <i className="fa fa-location-dot w3-xxlarge w3-text-light-grey" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                    ut!
                  </p>
                </div>
                <div className="w3-third w3-dark-grey w3-padding-24">
                  <i className="fa fa-phone w3-xxlarge w3-text-light-grey" />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <hr className="w3-opacity" />
              <form action="#" method="POST">
                <div className="w3-section">
                  <label htmlFor="name">Lorem ipsum dolor sit amet.</label>
                  <input
                    className="w3-input w3-border w3-round"
                    type="text"
                    name="name"
                    required=""
                  />
                </div>
                <div className="w3-section">
                  <label htmlFor="email">Email ipsum dolor sit amet.</label>
                  <input
                    className="w3-input w3-border w3-round"
                    type="text"
                    name="email"
                    required=""
                  />
                </div>
                <div className="w3-section">
                  <label htmlFor="message">Lorem, ipsum dolor.</label>
                  <textarea
                    className="w3-input w3-border w3-round"
                    type="text"
                    name="mesage"
                    rows={5}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="w3-section">
                  <div className="w3-text-red">
                    <ul>
                      <li>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Nisi, dignissimos.
                      </li>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </div>
                  <div className="w3-center">
                    <button
                      type="submit"
                      className="w3-button w3-teal w3-margin-bottom w3-round"
                    >
                      <i className="fa fa-paper-plane w3-margin-right" />
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
      <footer className="w3-margin-top">
        <div className="w3-cell w3-mobile-row">
          <div className="w3-container w3-dark-grey w3-cell w3-mobile">
            <article>
              <h2 className="w3-text-light-blue w3-center">Footer Title</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur ipsa at delectus sed, aspernatur asperiores molestiae
                nulla maxime laborum nemo.
              </p>
            </article>
          </div>
          <div className="w3-container w3-black w3-cell w3-mobile">
            <article>
              <h2 className="w3-text-teal w3-center">Footer Title</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur ipsa at delectus sed, aspernatur asperiores molestiae
                nulla maxime laborum nemo.
              </p>
            </article>
          </div>
          <div className="w3-container w3-dark-grey w3-cell w3-mobile">
            <article>
              <h2 className="w3-text-light-blue w3-center">Footer Title</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur ipsa at delectus sed, aspernatur asperiores molestiae
                nulla maxime laborum nemo.
              </p>
            </article>
          </div>
          <div className="w3-dark-grey w3-row w3-mobile w3-center">
            <p className="w3-black w3-padding" style={{ margin: 0 }}>
              All rights reserved for Majhoolsoft © 2022
            </p>
          </div>
        </div>
      </footer>
    </>
  )
  export default Landing;