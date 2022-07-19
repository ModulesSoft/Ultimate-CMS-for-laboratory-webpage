import PageWrapper from "../components/PageWrapper";
import { useTranslation } from "react-i18next";
import { getImageUri } from "../../application/common";
import { useLocation, useParams } from "react-router-dom";
import { useFetchProfile } from "../../infrastructure/APIHandler";
export const Profile = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const loading = false;
    if (location.state) {
        // if the data is passed through profile list
        var { profile } = location.state;
    } else {
        const { student } = useParams();
        console.log(useFetchProfile({ user: student }));
    }
    return (
        <PageWrapper loading={loading} title="" description="" keywords="">
            {profile && (
                <section>
                    <div className="w3-card-4 w3-center w3-padding w3-mobile">
                        <a href="#">
                            <img
                                src={getImageUri(profile.image)}
                                alt="Alps"
                                className="w3-left w3-round profile__thumbnail"
                                loading="lazy"
                            />
                        </a>
                        <div className="w3-container w3-right w3-margin">
                            <h3 className="w3-center w3-green w3-round w3-badge">
                                {profile.user.roles[0] &&
                                    profile.user.roles[0].name}
                            </h3>
                            <div>
                                <strong>
                                    <hr />
                                    {t("supervisors")}
                                    {profile.supervisors.map(
                                        (supervisor, index) =>
                                            index !==
                                            profile.supervisors.length - 1
                                                ? supervisor.name[
                                                      i18n.language
                                                  ] + ", "
                                                : supervisor.name[i18n.language]
                                    )}
                                    <hr />
                                </strong>
                            </div>
                        </div>
                        <div className="w3-container">
                            <article>
                                <h2>
                                    {t("research title")}
                                    {profile.research_title[i18n.language]}
                                </h2>
                                <hr />
                                <p>
                                    {t("research text")}
                                    {profile.research_text[i18n.language]}
                                </p>
                                <hr />
                                <footer className="w3-container">
                                    <h5 className="w3-tag w3-teal w3-round">
                                        keywords
                                    </h5>
                                    <h5 className="w3-tag w3-teal w3-round">
                                        keywords
                                    </h5>
                                    <h5 className="w3-tag w3-teal w3-round">
                                        keywords
                                    </h5>
                                    <h5 className="w3-tag w3-teal w3-round">
                                        keywords
                                    </h5>
                                    <h5 className="w3-tag w3-teal w3-round">
                                        keywords
                                    </h5>
                                </footer>
                            </article>
                        </div>
                    </div>
                </section>
            )}
        </PageWrapper>
    );
};
export default Profile;
