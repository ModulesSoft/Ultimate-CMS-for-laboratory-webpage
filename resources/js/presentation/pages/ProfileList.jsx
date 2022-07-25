import { useTranslation } from "react-i18next";
import { useFetchProfiles } from "../../infrastructure/APIHandler";
import PageWrapper from "../components/PageWrapper";
import { getThumbUri } from "../../application/common";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export const Profiles = ({ type }) => {
    const { t, i18n } = useTranslation();
    const { tag } = useParams();
    const numberOfColumns = 3;
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
    const { data, loading } = useFetchProfiles({
        type: type,
        tag: tag,
    });
    const profiles = data;
    const title = t(type);
    const description = title;
    const keywords =
        profiles[0] &&
        profiles.map((profile) => profile.user.name[i18n.language]).toString();
    if (profiles[0]) {
        const extractedRoles = profiles.map(
            (profile) => profile.user.roles[0].id
        );
        // extract unique values
        var roles = [...new Set(extractedRoles)];
        // make role-color pairs object
        var rolesColors = {};
        roles.forEach((key, i) => (rolesColors[key] = colors[i]));
    }
    function chunk(array, size = 1) {
        let chunked = [];
        for (let i = 0; i < array.length; i += size) {
            chunked.push(array.slice(i, i + size));
        }
        return chunked;
    }
    const chunkedProfiles = chunk(profiles, numberOfColumns);
    return (
        <PageWrapper
            description={description}
            keywords={keywords}
            title={title}
            header={title}
            loading={loading}
        >
            {profiles[0] && (
                <section className="w3-container w3-margin-bottom">
                    <h2 className="w3-row w3-padding w3-blue-grey w3-round">
                        {t(type)}
                    </h2>
                    {chunkedProfiles.map((profiles, index) => (
                        <div className="w3-row" key={index}>
                            {profiles.map((profile) => (
                                <div
                                    key={profile.id}
                                    className={`w3-col w3-padding w3-mobile s${
                                        12 / numberOfColumns
                                    }`}
                                >
                                    <div className="w3-card-4 w3-round w3-center w3-mobile">
                                        <Link
                                            to={`/${type}/${profile.user.name["en"]}`}
                                        >
                                            <img
                                                src={getThumbUri(
                                                    "300x300",
                                                    profile.image
                                                )}
                                                className="profiles__thumbnail"
                                                alt={
                                                    profile.user.name[
                                                        i18n.language
                                                    ]
                                                }
                                                loading="lazy"
                                            />
                                        </Link>
                                        <div className="w3-container w3-padding">
                                            <h3 className="w3-text-teal">
                                                <Link
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                    to={`/${type}/${profile.user.name["en"]}`}
                                                >
                                                    {
                                                        profile.user.name[
                                                            i18n.language
                                                        ]
                                                    }
                                                </Link>
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
                                            {profile.supervisors[0] && (
                                                <strong>
                                                    {t("supervisors")}
                                                    {profile.supervisors.map(
                                                        (supervisor, index) =>
                                                            index !==
                                                            profile.supervisors
                                                                .length -
                                                                1
                                                                ? supervisor
                                                                      .name[
                                                                      i18n
                                                                          .language
                                                                  ] + ", "
                                                                : supervisor
                                                                      .name[
                                                                      i18n
                                                                          .language
                                                                  ]
                                                    )}
                                                </strong>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </section>
            )}
        </PageWrapper>
    );
};
export default Profiles;
