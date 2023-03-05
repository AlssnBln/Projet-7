import React, {useState} from "react";
import "./ApartmentDescription.scss"

export function ApartmentDescription(props) {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    }

    const chevronClass = (isContentVisible ? "fa-sharp fa-solid fa-chevron-up" : "fa-sharp fa-solid fa-chevron-down") + " fas";

    return (
        <div className="apartment__description">
            <p className="description__header" onClick={showContent}>
                <span>{props.title}</span>
                <i className={chevronClass}></i>
            </p>
            {isContentVisible && <p className="description__content">{props.content}</p>}
        </div>
    )
}
