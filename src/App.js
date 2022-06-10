import './App.css';
import { useState, useEffect } from 'react';
import { getPortfolioDetails } from './firebase';

function App() {
  const [portfolioDetails, setPortfolioDetails] = useState({
    title: '[Not found]',
    position: '[Not found]',
    blurb: '[Not found]'
  });

  useEffect(() => {
    getPortfolioDetails().then(portfolioDetails => {
      if (portfolioDetails.exists) {
        setPortfolioDetails(portfolioDetails.data());
      } else {
        console.log('Error - Portfolio details not found');
      }
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="title">{portfolioDetails.title}</p>
        <p data-testid="position">{portfolioDetails.position}</p>
        <p data-testid="blurb">{portfolioDetails.blurb}</p>
      </header>
    </div>
  );
}

export default App;
