import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import BucketList from '../BucketList/BucketList';
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
            <div>
                <BucketList bucketlist={bucketlist}></BucketList>
            </div>
        </div>
    );
};

export default Countries;