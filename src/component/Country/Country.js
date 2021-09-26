import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props);

    // using destructuring to get object's properties
    const { name, place, info, cost, continent, img, population } = props.country;

    return (
        <div className="country ">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="country-info">
                <p><span className="fw-bold fs-3">Country: </span><span className="text-color fw-bold fs-3">{name}</span></p>
                <p><span className="fw-bold">Visti: </span> {place}</p>
                <p><span className="fw-bold">About: </span> {info}</p>
                <p><span className="fw-bold">Cost: </span> ${cost}</p>
                <p><span className="fw-bold">Continent: </span> {continent}</p>
                <p><span className="fw-bold">Population: </span> {population}</p>
            </div>
            <div>
                <button
                    onClick={() => props.handleAddToList(props.country)}
                    type="button" className="btn-style"
                ><FontAwesomeIcon icon={faShoppingCart} /> Add to list</button>
            </div>
        </div>
    );
};

export default Country;