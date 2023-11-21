import React, { useState } from 'react';
import SeniorIcon from "../assets/images/Seniors.svg";
import AdultIcon from "../assets/images/AdultIcon.svg";
import YouthIcon from "../assets/images/YouthIcon.svg";
import ChildIcon from "../assets/images/ChildIcon.svg";
import "../styles/TicketCounter.css";
import { useTranslation } from 'react-i18next';   

const TicketCounter = ({ label, minAge, maxAge, ticketPrice, currentCount, setCurrentCount}) => {
    const { t } = useTranslation();
    const getIconForLabel = (label) => {
        switch (label) {
            case 'Senior':
                return SeniorIcon;
            case 'Adult':
                return AdultIcon;
            case 'Youth':
                return YouthIcon;
            case 'Child':
                return ChildIcon;
            default:
                return null;
        }
    };
    return (
        <div className="ticket-counter">
            <span> <img className="ticket-icon" src={getIconForLabel(label)} alt={label} /> </span>
            <span><b>{t(label)} {label === "Senior" ? ` (${minAge}+)` : ` (${minAge} - ${maxAge})`} {ticketPrice}</b> </span>
            <button className="decrement-button" onClick={() => setCurrentCount(currentCount > 0 ? currentCount - 1 : 0)}>-</button>
            <span> <b>{currentCount}</b> </span>
            <button className="increment-button" onClick={() => setCurrentCount(currentCount + 1)}>+</button>
        </div>
    );
};

export default TicketCounter