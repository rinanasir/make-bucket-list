import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props);
    const { name, place, info, cost, continent, img, populaton } = props.country;

    return (
        <div className="country ">
            <img src={img} alt="" />
            <h3>Country: <span className="text-color">{name}</span></h3>
            <div className="fw-bold">
                <p>Visit: {place}, {info}</p>
                <p>Cost: {cost}</p>
                <p>Continent: {continent}</p>
                <p>Population: {populaton}</p>
            </div>
            <div>
                <button type="button" class="btn btn-secondary"><FontAwesomeIcon icon={faShoppingCart} /> Add to list</button>
            </div>
        </div>
    );
};

export default Country;