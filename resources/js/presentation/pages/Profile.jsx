import PageWrapper from "../components/PageWrapper";
import { useTranslation } from "react-i18next";
import { getImageUri } from "../../application/common";
import { Link, useParams } from "react-router-dom";
import { useFetchProfile } from "../../infrastructure/APIHandler";
import Header from "../components/Header";
export const Profile = () => {
    const { t, i18n } = useTranslation();
    const { user } = useParams();
    const { data, loading } = useFetchProfile({ user: user });
    const profile = data;
    return (
        <PageWrapper loading={loading} title="" description="" keywords="">
            {profile.id && (
                <>
                    <Header h1={profile.user.name[i18n.language]} />
                    <section style={{ marginTop: 0 }}>
                        <div className="w3-card-4 w3-center w3-padding w3-mobile">
                            <a href="#">
                                <img
                                    src={getImageUri(profile.image)}
                                    alt={profile.user.name[i18n.language]}
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
                                    {profile.supervisors[0] && (
                                        <strong>
                                            <hr />
                                            {t("supervisors")}
                                            {profile.supervisors.map(
                                                (supervisor, index) =>
                                                    index !==
                                                    profile.supervisors.length -
                                                        1
                                                        ? supervisor.name[
                                                              i18n.language
                                                          ] + ", "
                                                        : supervisor.name[
                                                              i18n.language
                                                          ]
                                            )}
                                            <hr />
                                        </strong>
                                    )}
                                </div>
                            </div>
                            <div className="w3-container">
                                <article>
                                    <h2>
                                        {profile.research_title[i18n.language]}
                                    </h2>
                                    <hr />
                                    <p>
                                        {profile.research_text[i18n.language]}
                                    </p>
                                    <hr />
                                    <footer className="w3-container">
                                        {profile.tags.map((tag) => (
                                            <Link
                                                className="w3-padding"
                                                key={tag.id}
                                                to={
                                                    "/tags/" +
                                                    tag.keyword[i18n.language]
                                                }
                                            >
                                                <h5 className="w3-tag w3-teal w3-round">
                                                    {tag.keyword[i18n.language]}
                                                </h5>
                                            </Link>
                                        ))}
                                    </footer>
                                </article>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </PageWrapper>
    );
};
export default Profile;
