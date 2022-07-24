export const Hero = ({ h1, p }) => (
    <>
        <div className="hero w3-center">
            <h1>{h1}</h1>
            {p && <p>{p}</p>}
        </div>
    </>
);
export default Hero;
