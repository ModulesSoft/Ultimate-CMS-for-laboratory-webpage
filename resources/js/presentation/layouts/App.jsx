import Loader from "../../infrastructure/loader";
import { Helmet } from "react-helmet";
export const Layout = () => (
    <>
        <head>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="description"
                    content="Biological fluids laboratory - Amirkabir University of Technology"
                />
                <meta
                    name="keywords"
                    content="Nasser Fatouraee, Malikeh Nabaei, AUT, Biofluids, Lab"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link href="/css/style.css" rel="stylesheet" />
                <title>Biofluids Laboratory</title>
            </Helmet>
        </head>
        <body className="w3-lightgrey">
            <Loader />
        </body>
    </>
);
export default Layout;
