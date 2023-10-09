import React from "react";
import styles from './SearchBar.module.css'

const sortingOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

function SearchBar () {
    const sorted = () => {
        return Object.keys(sortingOptions).map((criteria) => {
            let sortResult = sortingOptions.criteria;
            return <li key={sortResult}>{criteria}</li>
        });
    };


    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                <ul>{sorted()}</ul>
            </div>
            <div className={styles.SearchBarFields}>
                <input type="text" placeholder="Search Restaurant" />
                <input type="text" placeholder="City" />
            </div>
            <div className={styles.SearchBarSubmit}>
                <a>Search!</a>
            </div>
        </div>
    );
};

export default SearchBar;