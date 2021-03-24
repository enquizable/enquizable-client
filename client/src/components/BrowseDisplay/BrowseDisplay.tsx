import React from 'react';

const BrowseDisplay: React.FC = () => (
  <div className="browse-display">
    <div className="browse-display-search-bar-wrapper">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
);

export default BrowseDisplay;
