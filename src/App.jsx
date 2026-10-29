import React, { useState } from 'react';
import LegoCard from './components/LegoCard.jsx';
import './App.css';

// This array is our sample LEGO data.
const legoSets = [
  { id: 1, name: 'Brick House', pieces: 120, emoji: '🏠' },
  { id: 2, name: 'Race Car', pieces: 95, emoji: '🏎️' },
  { id: 3, name: 'Space Explorer', pieces: 210, emoji: '🚀' },
  { id: 4, name: 'Castle', pieces: 350, emoji: '🏰' },
];

export default function App() {
  // State remembers which LEGO set IDs are in our collection.
  const [collectedIds, setCollectedIds] = useState([]);

  function toggleCollection(id) {
    setCollectedIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((currentId) => currentId !== id)
        : [...currentIds, id]
    );
  }

  return (
    <main className="app">
      <header>
        <h1>🧱 My LEGO Collection</h1>
        <p>Discover sets and build your collection!</p>
        <div className="counter">Collected: {collectedIds.length} / {legoSets.length}</div>
      </header>

      <section className="card-grid" aria-label="LEGO sets">
        {legoSets.map((set) => (
          <LegoCard
            key={set.id}
            set={set}
            isCollected={collectedIds.includes(set.id)}
            onToggle={toggleCollection}
          />
        ))}
      </section>

      <section className="collection-summary">
        <h2>Your Collection</h2>
        {collectedIds.length === 0 ? (
          <p>No LEGO sets collected yet. Add your first one!</p>
        ) : (
          <ul>
            {legoSets.filter((set) => collectedIds.includes(set.id)).map((set) => (
              <li key={set.id}>{set.emoji} {set.name}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
