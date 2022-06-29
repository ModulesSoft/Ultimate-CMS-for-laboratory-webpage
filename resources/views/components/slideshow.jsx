const Slideshow = () => (
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
                        onClick="currentDiv(1)"
                    />
                </div>
            </div>
        </div>
    </section>
);
export default Slideshow;
