import Loading from "../components/Loading";
import { Helmet } from "react-helmet";
import Header from "./Header";

const PageWrapper = (props) => {
    return props.loading ? (
        <Loading />
    ) : (
        <>
            <Helmet>
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <title>{props.title}</title>
            </Helmet>
            {props.header && <Header h1={props.header} />}
            {props.children}
        </>
    );
};
export default PageWrapper;
