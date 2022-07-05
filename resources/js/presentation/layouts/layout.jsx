import Footer from "../components/footer";
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
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <link
                    rel="stylesheet"
                    href="https://www.w3schools.com/w3css/4/w3.css"
                />
                <link href="/css/app.css" rel="stylesheet" />
                <title>Biofluids Laboratory</title>
            </Helmet>
        </head>
        <body className="w3-lightgrey">
            <Loader />
            <Footer />
        </body>
    </>
);
export default Layout;
