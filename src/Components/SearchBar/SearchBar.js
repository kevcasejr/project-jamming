import React, { useState } from "react";
import './SearchBar.css';


export function SearchBar ({ onSearch }) {
    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    }

   /* const search = () => {
        onSearch(term);
    } */
   return (
    <div className="SearchBar">
        <input placeholder="Enter A Song Title"/>
        <button className="SearchButton">SEARCH</button>
    </div>
   )
}