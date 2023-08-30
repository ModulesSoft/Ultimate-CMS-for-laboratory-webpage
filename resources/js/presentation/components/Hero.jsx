export const Hero = ({ h1, p }) => (
    <>
        <div className="hero w3-center">
            {h1 && (
                <h1>
                    <a href={h1.link} style={{ textDecoration: "none" }}>
                        {h1.text}
                    </a>
                </h1>
            )}
            {p && (
                <p>
                    <a href={p.link} style={{ textDecoration: "none" }}>
                        {p.text}
                    </a>
                </p>
            )}
        </div>
    </>
);
export default Hero;
