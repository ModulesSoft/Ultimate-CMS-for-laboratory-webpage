import React from "react";

const LoadingOverlay = () => (
    <div className="loading-overlay">
        <div className="loading-content">
            <i
                className="fa fa-spinner w3-spin w3-text-teal"
                style={{ fontSize: "64px" }}
            ></i>
            {/* <p>Loading...</p> */}
        </div>
    </div>
);

export default LoadingOverlay;
