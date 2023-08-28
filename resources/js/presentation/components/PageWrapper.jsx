import Loading from "../components/Loading";
import { Helmet } from "react-helmet";
import Header from "./Header";
import { useTranslation } from "react-i18next";
const PageWrapper = (props) => {
    const { t } = useTranslation();

    return props.loading ? (
        <Loading />
    ) : (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={
                        props.description +
                        " -- " +
                        t("laboratory") +
                        " - " +
                        t("university")
                    }
                />
                {/* <meta name="keywords" content={props.keywords} /> */}
                <title>{props.title}</title>
            </Helmet>
            {props.header && <Header h1={props.header} />}
            {props.children}
        </>
    );
};
export default PageWrapper;
