import React from "react";
import Business from './Business.js';


function BusinessList () {
    const businessArray = [];

    return (
    <div className="business-list">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
    </div>
    );
};

export default BusinessList;