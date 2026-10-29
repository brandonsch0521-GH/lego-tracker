import React from 'react';
// Props are values passed from the parent App component.
export default function LegoCard({ set, isCollected, onToggle }) {
  return (
    <article className="lego-card">
      <div className="lego-emoji" aria-hidden="true">{set.emoji}</div>
      <h3>{set.name}</h3>
      <p>{set.pieces} pieces</p>
      <button onClick={() => onToggle(set.id)}>
        {isCollected ? 'Remove from collection' : 'Add to collection'}
      </button>
    </article>
  );
}
