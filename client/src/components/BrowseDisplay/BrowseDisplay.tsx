import React from 'react';
import BrowseQuizeList from './BrowseQuizeList/BrowseQuizeList';
import BrowseSearchBar from './BrowseSearchBar/BrowseSearchBar';

const BrowseDisplay: React.FC = () => (
  <div className="browse-display">
    <div className="browse-display-wrapper">
      <BrowseSearchBar />
      <div className="problem-display-wrapper">
        <BrowseQuizeList />
      </div>
    </div>
  </div>
);

export default BrowseDisplay;
