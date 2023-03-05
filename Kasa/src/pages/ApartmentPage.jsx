import React, { useEffect, useState } from "react";
import "./ApartmentPage.scss"
import { ApartmentDescription } from "../components/ApartmentDescription";
import { ApartmentEquipment } from "../components/ApartmentEquipment";
import { ImageBanner } from "../components/ImageBanner";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { useLocation } from "react-router-dom";

function ApartmentPage () {
    const location = useLocation();
    const [flat, setFlat] = useState(null);
    useEffect(fetchApartmentData, []);

    function fetchApartmentData() {
        fetch("db.json")
            .then((res) => res.json())
            .then((flats) => {
                const flat = flats.find((flat) => flat.id === location.state.apartmentId);
                setFlat(flat);
            })
            .catch(console.error);
    }

    if (flat == null) return <div>Loading...</div>;

    return (
    <div className="apartment-page">
        <ImageBanner pictures={flat.pictures}/>
        <ApartmentHeader flat={flat}/>
        <div className="apartment__description__area">
        <ApartmentDescription title="Description" content={flat.description}/>
        <ApartmentEquipment title="Equipements" content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
        ))}/>
        </div>
    </div>
    );
}

export default ApartmentPage;