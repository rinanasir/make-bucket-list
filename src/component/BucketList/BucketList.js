import { faDollarSign, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BucketList.css';

const BucketList = () => {
    return (
        <div className="bucket-list">
            <h3>Bucket List</h3>
            <h5><FontAwesomeIcon icon={faGlobe} /> Country added: 0</h5>
            <h5><FontAwesomeIcon icon={faDollarSign} /> Total cost: </h5>
        </div>
    );
};

export default BucketList;