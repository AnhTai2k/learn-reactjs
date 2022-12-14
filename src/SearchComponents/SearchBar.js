import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function SearchBar({placeholder, data}) {

  const [filteredData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());    
    });

    if (searchWord === "") {
        setFilterData([]);
    } else {
        setFilterData(newFilter);
    }  
  };

  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  }

  return (
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
            <div className="searchIcon">
                {filteredData.length === 0 ? (
                    <SearchIcon />
                ) : (
                    <CloseIcon id="clearBtn" onClick={clearInput}/>
                    )}             
            </div>            
        </div>
        {filteredData.length !== 0 && (
        <div className="dataResult">
            {filteredData.map((value, key) => {
                return (
                <a className="dataItem" href={value.link} target="_blank">
                    <p>
                        {value.title} 
                    </p>                
                </a>
                );
            })}
        </div>
        )}
    </div>
  );
}

export default SearchBar;