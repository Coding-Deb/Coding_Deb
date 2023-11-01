import React from "react";
import { Link } from "react-router-dom";

export const SearchResultsDropdown = ({ searchResults }) => {
  return (
    <div className="search-results-dropdown">
      {searchResults.length > 0 ? (
        <div>
          {searchResults.map((lang, index) => (
            <div key={index} >
              <Link to={lang.website} target="_blank" rel="noopener noreferrer">
                {lang.name}
              </Link>
              <p>{lang.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
