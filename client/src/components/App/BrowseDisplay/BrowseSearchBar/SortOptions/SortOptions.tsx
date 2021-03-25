import React from 'react';

const SortOptions: React.FC = () => (
  <div>
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Sort
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item" href="#">Top Quizes</a></li>
        <li><a className="dropdown-item" href="#">Newest</a></li>
        <li><a className="dropdown-item" href="#">Oldest</a></li>
      </ul>
    </div>
  </div>
);

export default SortOptions;
