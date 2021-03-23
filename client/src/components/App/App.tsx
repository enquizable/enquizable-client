import React from 'react';
import Header from '../Header/Header';

const App: React.FC = () => (
  <div className="app-container">
    <header>
      <Header />
    </header>
    <main>
      Main component
    </main>
    <footer>
      <div>
        All rights is reserved.
      </div>
    </footer>
  </div>
);

export default App;
