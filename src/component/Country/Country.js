import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props);
    const { name, place, info, cost, continent, img } = props.country;

    return (
        <div className="country ">
            <img src={img} alt="" />
            <div className="country-info">
                <p><span className="fw-bold fs-3">Country: </span><span className="text-color fw-bold fs-3">{name}</span></p>
                <p><span className="fw-bold">Visti: </span> {place}</p>
                <p><span className="fw-bold">About: </span> {info}</p>
                <p><span className="fw-bold">Cost: </span> ${cost}</p>
                <p><span className="fw-bold">Continent: </span> {continent}</p>
            </div>
            <div>
                <button type="button" class="btn-style"><FontAwesomeIcon icon={faShoppingCart} /> Add to list</button>
            </div>
        </div>
    );
};

export default Country;