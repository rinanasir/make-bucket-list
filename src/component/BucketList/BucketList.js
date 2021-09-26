import { faDollarSign, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Listcountry from '../Listcountry/Listcountry';
import './BucketList.css';

const BucketList = (props) => {
    // console.log(props.bucketlist);

    const { bucketlist } = props;
    let total = 0;
    // const countryName = [];
    for (const country of bucketlist) {
        total = total + country.cost;
        // countryName.push(country.name);
        // console.log(countryName);
    }


    return (
        <div className="bucket-list">
            <div>
                <h2>Bucket<span className="text-color">List</span></h2>
            </div>
            <hr />
            <div className="bucketlist-info">
                <h5><FontAwesomeIcon icon={faGlobe} /> Country added: {props.bucketlist.length}</h5>
                <h5>Total cost: <FontAwesomeIcon icon={faDollarSign} /> {total}</h5>
            </div>
            <hr />
            <div className="bucketlist-info">
                {
                    bucketlist.map(country => <Listcountry
                        key={country.key}
                        country={country}
                    >
                    </Listcountry>)
                }
            </div>
        </div>
    );
};

export default BucketList;