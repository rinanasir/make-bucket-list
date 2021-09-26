import React, { useEffect, useState } from 'react';
import { faDollarSign, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountry] = useState([]);
    const [bucketlist, setBucketlist] = useState([]);

    // loading countries data
    useEffect(() => {
        fetch('./countries.JSON')
            .then(res => res.json())
            .then(data => setCountry(data));
    }, []);

    // event handler for Add to list button
    const handleAddToList = (country) => {
        // here we are creating a new array with previous list, and adding new selected country
        const newBucketlist = [...bucketlist, country];
        setBucketlist(newBucketlist);
    };

    return (
        <div className="container d-flex justify-content-between">
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.key}
                        country={country}
                        handleAddToList={handleAddToList}
                    >
                    </Country>)
                }
            </div>
            <div className="bucket-list">
                <div>
                    <h2>Bucket<span className="text-color">List</span></h2>
                </div>
                <hr />
                <div className="bucketlist-info">
                    <h5><FontAwesomeIcon icon={faGlobe} /> Country added: {bucketlist.length}</h5>
                    <h5>Total cost: <FontAwesomeIcon icon={faDollarSign} /> <span>0</span></h5>
                </div>
                <hr />
                <div className="bucketlist-info">
                    <li>place</li>
                </div>
            </div>
        </div>
    );
};

export default Countries;