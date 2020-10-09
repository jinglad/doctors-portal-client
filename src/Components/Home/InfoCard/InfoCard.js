import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './infoCard.css';

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-white">
            <div className={`d-flex justify-content-center rounded info-container info-${info.background}`}>
                <div>
                    <FontAwesomeIcon className="mr-3 info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;