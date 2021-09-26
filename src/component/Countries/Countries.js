import React, { useEffect, useState } from 'react';
import BucketList from '../BucketList/BucketList';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountry] = useState([]);

    // loading countries data
    useEffect(() => {
        fetch('./countries.JSON')
            .then(res => res.json())
            .then(data => setCountry(data));
    }, []);

    const handleAddToList = (country) => {
        console.log('clicked');
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
            <div>
                <BucketList></BucketList>
            </div>
        </div>
    );
};

export default Countries;