import React from "react";
import styles from './Business.module.css'

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
    return (<div className={styles.Business}>
        <div className={styles.imageContainer}>
        <img src={sample.imageSrc}/>
        </div>
        <h2>{sample.name}</h2>
        <div className={styles.BusinessInformation}>
            <div className={styles.BusinessAddress}>
                <p>{sample.address}</p>
                <p>{sample.city}</p>
                <p>{sample.state}</p>
                <p>{sample.zipCode}</p>
            </div>
            <div className={styles.BusinessReviews}>
            <h3>{sample.category.toUpperCase()}</h3>
            <h3 className={styles.rating}>{sample.rating}</h3>
            <p>{sample.reviewCount}</p>
            </div>
        </div>
        
    </div>)
};

export default Business;