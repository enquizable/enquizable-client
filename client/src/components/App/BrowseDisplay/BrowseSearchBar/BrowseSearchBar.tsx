import React from 'react';
import SortOptions from './SortOptions/SortOptions';

const BrowseSearchBar: React.FC = () => (
  <div className="search-bar-wrapper">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <SortOptions />
    </form>
  </div>
);

export default BrowseSearchBar;
