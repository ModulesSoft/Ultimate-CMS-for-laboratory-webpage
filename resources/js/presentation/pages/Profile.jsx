import PageWrapper from "../components/PageWrapper";
import { useTranslation } from "react-i18next";
import { extractKeywords, getImageUri } from "../../application/common";
import { useParams } from "react-router-dom";
import { useFetchProfile } from "../../infrastructure/APIHandler";
import Tags from "../components/Tags";
export const Profile = () => {
    const { t, i18n } = useTranslation();
    const { user } = useParams();
    const { data, loading } = useFetchProfile({ user: user });
    const profile = data;
    const title = profile.id && profile.user.name[i18n.language];
    const adapter = [profile];
    const keywords = profile.id && extractKeywords(adapter, i18n.language);
    const description =
        profile.id &&
        profile.research_title[i18n.language] +
            " - " +
            profile.user.name[i18n.language];
    return (
        <PageWrapper
            loading={loading}
            title={title}
            header={title}
            description={description}
            keywords={keywords}
        >
            {profile.id && (
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
                                                profile.supervisors.length - 1
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
                                <h2>{profile.research_title[i18n.language]}</h2>
                                <hr />
                                <p>{profile.research_text[i18n.language]}</p>
                                <hr />
                                <Tags tags={profile.tags} />
                            </article>
                        </div>
                    </div>
                </section>
            )}
        </PageWrapper>
    );
};
export default Profile;
