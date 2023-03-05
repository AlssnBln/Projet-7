import React, {useState} from "react";
import "./AboutSecurite.scss";

export function AboutSecurite(props) {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    }

    const chevronClass = (isContentVisible ? "fa-sharp fa-solid fa-chevron-up" : "fa-sharp fa-solid fa-chevron-down") + " fas";

    return (
        <div className="about__securite">
            <p className="securite__header" onClick={showContent}>
                <span>Sécurité</span>
                <i className={chevronClass}></i>
            </p>
            {isContentVisible && <p className="securite__content">{props.content}</p>}
        </div>
    )
}