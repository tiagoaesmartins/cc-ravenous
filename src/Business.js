import React from "react";

const sample = {imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90};


function Business() {
    return (<div>
        <img src={sample.imageSrc}/>
        <h1 className="name">{sample.name}</h1>
        <p className="address">{sample.address}</p>
        <p className="city">{sample.city}</p>
        <p className="state">{sample.state}</p>
        <p className="zipcode">{sample.zipCode}</p>
        <p className="category">{sample.category}</p>
        <p className="rating">{sample.rating}</p>
        <p className="review-count">{sample.reviewCount}</p>
    </div>)
};

export default Business;