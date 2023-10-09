import React from "react";

const sortOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

function SearchBar () {
    const sorted = () => {
        return Object.keys(sortOptions).map((criteria) => {
            let sortResult = sortOptions.criteria;
            return <li key={sortResult}>{criteria}</li>
        });
    };


    return (
        <div>
            <div className="sort-by">
                <ul>{sorted()}</ul>
            </div>
            <div className="fields">
                <input type="text" placeholder="Search Restaurant" />
                <input type="text" placeholder="City" />
                <input type="search" />
            </div>
        </div>
    );
};

export default SearchBar;