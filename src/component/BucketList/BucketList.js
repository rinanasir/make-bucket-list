import { faDollarSign, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BucketList.css';

const BucketList = () => {
    return (
        <div className="bucket-list">
            <div>
                <h2>Bucket<span className="text-color">List</span></h2>
            </div>
            <hr />
            <div className="bucketlist-info">
                <h5><FontAwesomeIcon icon={faGlobe} /> Country added: <span>0</span></h5>
                <h5>Total cost: <FontAwesomeIcon icon={faDollarSign} /> <span>0</span></h5>
            </div>
            <hr />
            <div className="bucketlist-info">
                <li>place</li>
            </div>
        </div>
    );
};

export default BucketList;