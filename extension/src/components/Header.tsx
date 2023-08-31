// Header.tsx
import React from 'react';

type HeaderProps = {
  onAddProfile: () => void;
  // You can add more props for toggling light/dark mode
};

const Header: React.FC<HeaderProps> = ({ onAddProfile }) => {
  return (
    <div className="header">
      <h1>ChatGPT Plugin Profiles</h1>
      <button onClick={() => { /* Toggle light/dark mode */ }}>🌙</button>
      <button onClick={onAddProfile}>+</button>
    </div>
  );
};

export default Header;
