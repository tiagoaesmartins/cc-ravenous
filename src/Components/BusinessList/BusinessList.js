import React from "react";
import styles from './BusinessList.module.css'
import Business from '../Business/Business';


function BusinessList ({businessList}) {
    const businessArray = [];

    return (
    <div className={styles.BusinessList}>
        {businessList.map(business => <Business business={business} />)}
    </div>
    );
};

export default BusinessList;