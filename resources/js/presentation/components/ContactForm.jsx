import { useTranslation } from "react-i18next";
import { useSendEmail } from "../../infrastructure/APIHandler";
import { useRef, useState } from "react";
import FromResponse from "./FormResponse";
import Loading from "./Loading";
import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
    const { t, i18n } = useTranslation();
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const messageInputRef = useRef(null);
    const recaptchaInputRef = useRef(null);
    const [formData, setFormData] = useState({});
    const submissionHandler = async (e) => {
        e.preventDefault();
        const token = await recaptchaInputRef.current.executeAsync();
        if (token) {
            const name = nameInputRef?.current.value;
            const email = emailInputRef?.current.value;
            const message = messageInputRef?.current.value;
            setFormData({ name, email, message });
        }
    };
    const { data, status, loading } = useSendEmail(formData);
    const response = data;
    if (status === 200) {
        nameInputRef.current.value = "";
        emailInputRef.current.value = "";
        messageInputRef.current.value = "";
    }else if(status === 500){
        return(
            <div className="w3-red">
                {t("error with sending email")}
            </div>
        )
    }
    return (
        <section id="contact" className="w3-margin-top">
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
                <form onSubmit={submissionHandler}>
                    <div className="w3-section">
                        <label htmlFor="name">{t("contact input name")}</label>
                        <input
                            className="w3-input w3-border w3-round"
                            type="text"
                            id="name"
                            ref={nameInputRef}
                            required
                        />

                        <FromResponse
                            input="name"
                            status={status}
                            response={response}
                        />
                    </div>
                    <div className="w3-section">
                        <label htmlFor="email">
                            {t("contact input email")}
                        </label>
                        <input
                            className="w3-input w3-border w3-round"
                            type="email"
                            id="email"
                            ref={emailInputRef}
                            required
                        />
                        <FromResponse
                            input="email"
                            status={status}
                            response={response}
                        />
                    </div>
                    <div className="w3-section">
                        <label htmlFor="message">
                            {t("contact input message")}
                        </label>
                        <textarea
                            className="w3-input w3-border w3-round"
                            type="text"
                            id="message"
                            rows={5}
                            defaultValue={""}
                            minLength="5"
                            ref={messageInputRef}
                            required
                        />
                        <FromResponse
                            input="message"
                            status={status}
                            response={response}
                        />
                    </div>
                    <div className="w3-section">
                        <div className="w3-center">
                            <FromResponse status={status} response={response} />
                            {loading ? (
                                <Loading />
                            ) : (
                                <>
                                    <button
                                        type="submit"
                                        className="w3-button w3-teal w3-margin-bottom w3-round"
                                    >
                                        <i className="fa fa-paper-plane w3-margin-right" />
                                        {t("contact input submit")}
                                    </button>
                                    <ReCAPTCHA
                                        badge="inline"
                                        ref={recaptchaInputRef}
                                        size="invisible"
                                        sitekey={t("google recaptcha sitekey")}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};
export default ContactForm;
