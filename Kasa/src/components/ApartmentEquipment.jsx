import React, {useState} from "react";
import "./ApartmentEquipment.scss"

export function ApartmentEquipment(props) {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    }
    const chevronClass = (isContentVisible ? "fa-sharp fa-solid fa-chevron-up" : "fa-sharp fa-solid fa-chevron-down") + " fas";

    return (
        <div className="apartment__equipment">
            <p className="equipment__header" onClick={showContent}>
                <span>{props.title}</span>
                <i className={chevronClass}></i>
            </p>
            {isContentVisible && <p className="equipment__content">{props.content}</p>}
        </div>
    )
}