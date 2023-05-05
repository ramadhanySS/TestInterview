import React from "react";
import '../style/button.css';

function JobButton (props) {
    return (
        <>
            <div className="containers">
                <div className="containerChoice">
                    <p>{props.judul}</p>
                    <div className="job btn btn-success rounded-pill">
                        {props.job}
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobButton;