import { useFetchProfiles } from "../../infrastructure/APIHandler";
import Header from "../components/Header";
import PageWrapper from "../components/PageWrapper";
export const Profiles = ({ title, keywords, description, type }) => {
    const { data, loading } = useFetchProfiles({
        type: type,
    });
    const profiles = data;
    return (
        <PageWrapper
            description={description}
            keywords={keywords}
            title={title}
            loading={loading}
        >
            <Header h1={title} />

            <section>
                <div className="w3-row w3-margin">
                    <h2 className="w3-row w3-padding w3-blue-grey w3-round">
                        Profiles 1
                    </h2>
                    <div className="w3-col w3-padding s4 w3-mobile">
                        <div className="w3-card-4 w3-round w3-center w3-mobile">
                            <a href="#">
                                <img
                                    src="https://www.w3schools.com/w3css/img_avatar3.png"
                                    className="profiles__thumbnail"
                                    alt="Alps"
                                />
                            </a>
                            <div className="w3-container w3-padding">
                                <h3>
                                    <a href="#">John Doe</a>
                                </h3>
                                <span className="w3-left w3-green w3-round w3-badge">
                                    MSc Student
                                </span>
                                <hr />
                                <strong>Supervisor: Jane Doe, John Doe</strong>
                            </div>
                        </div>
                    </div>
                    <div className="w3-col w3-padding s4 w3-mobile">
                        <div className="w3-card-4 w3-round w3-center w3-mobile">
                            <a href="#">
                                <img
                                    src="https://www.w3schools.com/w3css/img_avatar3.png"
                                    className="profiles__thumbnail"
                                    alt="Alps"
                                />
                            </a>
                            <div className="w3-container w3-padding">
                                <h3>
                                    <a href="#">John Doe</a>
                                </h3>
                                <span className="w3-left w3-green w3-round w3-badge">
                                    MSc Student
                                </span>
                                <hr />
                                <strong>Supervisor: Jane Doe</strong>
                            </div>
                        </div>
                    </div>
                    <div className="w3-col w3-padding s4 w3-mobile">
                        <div className="w3-card-4 w3-round w3-center w3-mobile">
                            <a href="#">
                                <img
                                    src="https://www.w3schools.com/w3css/img_avatar3.png"
                                    className="profiles__thumbnail"
                                    alt="Alps"
                                />
                            </a>
                            <div className="w3-container w3-padding">
                                <h3>
                                    <a href="#">John Doe</a>
                                </h3>
                                <span className="w3-left w3-green w3-round w3-badge">
                                    MSc Student
                                </span>
                                <hr />
                                <strong>Supervisor: Jane Doe</strong>
                            </div>
                        </div>
                    </div>
                    <div className="w3-col w3-padding s4 w3-mobile">
                        <div className="w3-card-4 w3-round w3-center w3-mobile">
                            <a href="#">
                                <img
                                    src="https://www.w3schools.com/w3css/img_avatar3.png"
                                    className="profiles__thumbnail"
                                    alt="Alps"
                                />
                            </a>
                            <div className="w3-container w3-padding">
                                <h3>
                                    <a href="#">John Doe</a>
                                </h3>
                                <span className="w3-left w3-red w3-round w3-badge">
                                    PHD Student
                                </span>
                                <hr />
                                <strong>Supervisor: Jane Doe</strong>
                            </div>
                        </div>
                    </div>
                    <div className="w3-col w3-padding s4 w3-mobile">
                        <div className="w3-card-4 w3-round w3-center w3-mobile">
                            <a href="#">
                                <img
                                    src="https://www.w3schools.com/w3css/img_avatar3.png"
                                    className="profiles__thumbnail"
                                    alt="Alps"
                                />
                            </a>
                            <div className="w3-container w3-padding">
                                <h3>
                                    <a href="#">John Doe</a>
                                </h3>
                                <span className="w3-left w3-blue w3-round w3-badge">
                                    post Student
                                </span>
                                <hr />
                                <strong>Supervisor: Jane Doe, John Doe</strong>
                            </div>
                        </div>
                    </div>
                    <div className="w3-col w3-padding s4 w3-mobile">
                        <div className="w3-card-4 w3-round w3-center w3-mobile">
                            <a href="#">
                                <img
                                    src="https://www.w3schools.com/w3css/img_avatar3.png"
                                    className="profiles__thumbnail"
                                    alt="Alps"
                                />
                            </a>
                            <div className="w3-container w3-padding">
                                <h3>
                                    <a href="#">John Doe</a>
                                </h3>
                                <span className="w3-left w3-green w3-round w3-badge">
                                    MSc Student
                                </span>
                                <hr />
                                <strong>Supervisor: Jane Doe</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};
export default Profiles;
