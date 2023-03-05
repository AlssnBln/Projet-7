import React, {useState} from "react";
import "./AboutRespect.scss";

export function AboutRespect(props) {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    }

    const chevronClass = (isContentVisible ? "fa-sharp fa-solid fa-chevron-up" : "fa-sharp fa-solid fa-chevron-down") + " fas";

    return (
        <div className="about__respect">
            <p className="respect__header" onClick={showContent}>
                <span>Respect</span>
                <i className={chevronClass}></i>
            </p>
            {isContentVisible && <p className="respect__content">{props.content}</p>}
        </div>
    )
}