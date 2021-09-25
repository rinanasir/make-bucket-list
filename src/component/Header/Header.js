import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Buckle<span className="text-color">UP</span></h1>
            <p>Create a personalised <span className="text-color">Bucket List</span> that you intend to experience within your lifetime. <br /> Add only what you dream to see no matter how big or small.</p>
            <h2>Total Budget: $100 Million</h2>
        </div>
    );
};

export default Header;