import Navbar from "../../js/presentation/components/navbar";
import Aside from "../../js/presentation/components/sidebar";
import Footer from "../../js/presentation/components/footer";
export const Layout = ({ title, header, keywords, description, children }) => (
    <>
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
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
            <link href="css/app.css" rel="stylesheet" />
            <title>{title}</title>
        </head>
        <body className="w3-lightgrey">
            {/* Overlay */}
            <div
                className="w3-overlay"
                onClick="w3_close()"
                style={{ cursor: "pointer" }}
                id="myOverlay"
            />
            <Navbar />
            <header>{header}</header>
            <main>
                <Aside />
                {children}
            </main>
            <Footer />
        </body>
    </>
);
export default Layout;
