import Loader from "../../infrastructure/loader";
import { Helmet } from "react-helmet";
export const Layout = () => (
    <>
        <head>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="theme-color" content="#4CAF50" />
                <link rel="manifest" href="/manifest.json" />
                <link href="/css/style.css" rel="stylesheet" />
            </Helmet>
        </head>
        <body className="w3-lightgrey">
            <Loader />
        </body>
    </>
);
export default Layout;
