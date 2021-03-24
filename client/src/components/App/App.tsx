import React from 'react';
import BrowseDisplay from '../BrowseDisplay/BrowseDisplay';
import Header from '../Header/Header';

const App: React.FC = () => (
  <div className="app-container">
    <header>
      <Header />
    </header>
    <main>
      <BrowseDisplay />
    </main>
    <footer>
      <div>
        All rights is reserved.
      </div>
    </footer>
  </div>
);

export default App;
