import React from "react";
import styles from './App.module.css'

import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'

const sample = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const sampleArray = [sample, sample, sample, sample, sample, sample];

function App () {
  const searchYelp = (term, location, sort) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sort}`);
  };

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businessList={sampleArray} />
    </div>
  );
};

export default App;