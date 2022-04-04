import React from 'react';
import data from './data';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const cards = data.map((card, index) => {
    return (
      <Card 
        key={index}
        {...card}
      />
      
    )
  })


  return (
    <div>
      <Header />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
