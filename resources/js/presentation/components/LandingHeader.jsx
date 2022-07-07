export const LandingHeader = ({ h1, p }) => (
    <>
        <div className="header w3-center">
            <h1>{h1}</h1>
            {p && <p>{p}</p>}
        </div>
    </>
);
export default LandingHeader;
