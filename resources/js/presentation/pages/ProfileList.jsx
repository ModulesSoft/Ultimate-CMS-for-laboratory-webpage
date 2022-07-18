import { useTranslation } from "react-i18next";
import { useFetchProfiles } from "../../infrastructure/APIHandler";
import Header from "../components/Header";
import PageWrapper from "../components/PageWrapper";
import { getThumbUri } from "../../application/common";
export const Profiles = ({ title, keywords, description, type }) => {
    const { data, loading } = useFetchProfiles({
        type: type,
    });
    const profiles = data;
    const { t, i18n } = useTranslation();
    if (profiles[0]) {
        const extractedRoles = profiles.map(
            (profile) => profile.user.roles[0].id
        );
        // extract unique values
        var roles = [...new Set(extractedRoles)];
        // add more colors if necessary
        const colors = [
            "w3-green",
            "w3-red",
            "w3-yellow",
            "w3-blue",
            "w3-purple",
            "w3-pink",
            "w3-indigo",
        ];
        // make role-color pairs object
        var rolesColors = {};
        roles.forEach((key, i) => (rolesColors[key] = colors[i]));
    }
    return (
        <PageWrapper
            description={description}
            keywords={keywords}
            title={title}
            loading={loading}
        >
            <Header h1={title} />
            {profiles[0] && (
                <section>
                    <div className="w3-row w3-margin">
                        <h2 className="w3-row w3-padding w3-blue-grey w3-round">
                            {t("profiles")}
                        </h2>
                        {profiles.map((profile) => (
                            <div
                                key={profile.id}
                                className="w3-col w3-padding s4 w3-mobile"
                            >
                                <div className="w3-card-4 w3-round w3-center w3-mobile">
                                    <a href="#">
                                        <img
                                            src={getThumbUri(
                                                "300x300",
                                                profile.image
                                            )}
                                            className="profiles__thumbnail"
                                            alt={profile.name[i18n.language]}
                                        />
                                    </a>
                                    <div className="w3-container w3-padding">
                                        <h3>
                                            <a href="#">
                                                {profile.name[i18n.language]}
                                            </a>
                                        </h3>
                                        <span
                                            className={`w3-left w3-round w3-badge ${
                                                rolesColors[
                                                    profile.user.roles[0].id
                                                ]
                                            }`}
                                        >
                                            {profile.user.roles[0] &&
                                                profile.user.roles[0].name}
                                        </span>
                                        <hr />
                                        <strong>
                                            {t("supervisors")}
                                            {profile.supervisors.map(
                                                (supervisor, index) =>
                                                    index !==
                                                    profile.supervisors.length -
                                                        1
                                                        ? supervisor.name + ", "
                                                        : supervisor.name
                                            )}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </PageWrapper>
    );
};
export default Profiles;
