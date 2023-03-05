import React, {useState} from "react";
import "./AboutFiabilite.scss";

export function AboutFiabilite(props) {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    }

    const chevronClass = (isContentVisible ? "fa-sharp fa-solid fa-chevron-up" : "fa-sharp fa-solid fa-chevron-down") + " fas";

    return (
        <div className="about__fiabilite">
            <p className="fiabilite__header" onClick={showContent}>
                <span>Fiabilité</span>
                <i className={chevronClass}></i>
            </p>
            {isContentVisible && <p className="fiabilite__content">{props.content}</p>}
        </div>
    )
}