import preloader from "../../res/preloader.svg";
import React from "react";

let Preloader = (props) => {
    return (
        <div>
            <img className='preloader' src={preloader} />
        </div>
    )
}

export default Preloader;
