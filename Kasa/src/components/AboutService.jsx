import React, {useState} from "react";
import "./AboutService.scss";

export function AboutService(props) {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    }

    const chevronClass = (isContentVisible ? "fa-sharp fa-solid fa-chevron-up" : "fa-sharp fa-solid fa-chevron-down") + " fas";

    return (
        <div className="about__service">
            <p className="service__header" onClick={showContent}>
                <span>Service</span>
                <i className={chevronClass}></i>
            </p>
            {isContentVisible && <p className="service__content">{props.content}</p>}
        </div>
    )
}