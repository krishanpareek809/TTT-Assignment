import React from "react";
import "./SubmitButton.css";
import { useNavigate } from "react-router-dom";

function SubmitButton() {
    const navigate = useNavigate();

    return (
        <div className="btn">
            <button onClick={() => navigate("/histogram-data")}>SUBMIT</button>
        </div>
    )
}

export default SubmitButton;