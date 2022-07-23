const FromResponse = ({ input = null, status, response }) =>
    response[input] &&
    (status === 200 ? (
        <div className="w3-text-green">
            <ul>
                <li>{response.message}</li>
            </ul>
        </div>
    ) : (
        <div className={`${status === 200 ? "w3-text-green" : "w3-text-red"}`}>
            <ul>
                {response[input].map((messages, index) => (
                    <li key={index}>{messages}</li>
                ))}
            </ul>
        </div>
    ));

export default FromResponse;
