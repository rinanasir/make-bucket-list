import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Listcountry.css';

const Listcountry = (props) => {
    // console.log(props.country.name);

    return (
        <div className="list-country">
            <p><FontAwesomeIcon icon={faChevronCircleRight} /> {props.country.name}</p>
        </div>
    );
};

export default Listcountry;