import React, { useState } from "react";
import styles from './SearchBar.module.css'

const sortingOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

function SearchBar ({searchYelp}) {
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sort, setSort] = useState('best_match');

    const getSortByClass = (option) => {
        if (sort === option) {
            return styles.active;
        }
        return '';
    };

    const handleSortChange = option => {
        setSort(option);
    };

    const handleTermChange = event => {
        setTerm(event.target.value);
    };

    const handleLocationChange = event => {
        setLocation(event.target.value);
    };

    const handleSearch = event => {
        event.preventDefault();
        searchYelp(term, location, sort);
    };

    const sorted = () => {
        return Object.keys(sortingOptions).map((criteria) => {
            let sortResult = sortingOptions[criteria];
            return (
            <li 
            key={sortResult} 
            className={getSortByClass(sortResult)}
            onClick={() => {handleSortChange(sortResult)}}
            >
                {criteria}
            </li>
            )
        });
    };


    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                <ul>{sorted()}</ul>
            </div>
            <form onSubmit={handleSearch}>
                <div className={styles.SearchBarFields}>
                    <input type="text" placeholder="Foods!" onChange={handleTermChange} />
                    <input type="text" placeholder="Where?" onChange={handleLocationChange} />
                </div>
                <div className={styles.SearchBarSubmit}>
                    <button type='submit'>Search!</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;