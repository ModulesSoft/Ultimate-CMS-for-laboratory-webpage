import { useTranslation } from "react-i18next";

const ContactForm = () => {
    const { t, i18n } = useTranslation();
    return (
        <section id="contact">
            <div className="w3-padding-large w3-light-grey">
                <h2 className="w3-text-dark-grey">
                    <i className="fa-solid fa-pen-to-square" />
                    <span className="w3-padding">{t("contact us")}</span>
                </h2>
                <div className="w3-row w3-center">
                    <div className="w3-third w3-dark-grey w3-padding-24">
                        <i className="fa fa-envelope w3-xxlarge w3-text-light-grey" />
                        <p>{t("contact email")}</p>
                    </div>
                    <div className="w3-third w3-teal w3-padding-24">
                        <i className="fa fa-location-dot w3-xxlarge w3-text-light-grey" />
                        <p>{t("contact address")}</p>
                    </div>
                    <div className="w3-third w3-dark-grey w3-padding-24">
                        <i className="fa fa-phone w3-xxlarge w3-text-light-grey" />
                        <p>{t("contact phone")}</p>
                    </div>
                </div>
                <hr className="w3-opacity" />
                <form action="#" method="POST">
                    <div className="w3-section">
                        <label htmlFor="name">{t("contact input name")}</label>
                        <input
                            className="w3-input w3-border w3-round"
                            type="text"
                            name="name"
                            required=""
                        />
                    </div>
                    <div className="w3-section">
                        <label htmlFor="email">
                            {t("contact input email")}
                        </label>
                        <input
                            className="w3-input w3-border w3-round"
                            type="text"
                            name="email"
                            required=""
                        />
                    </div>
                    <div className="w3-section">
                        <label htmlFor="message">
                            {t("contact input message")}
                        </label>
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
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Nisi, dignissimos.
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
                                {t("contact input submit")}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};
export default ContactForm;
