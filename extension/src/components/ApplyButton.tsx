// ApplyButton.tsx
import React from 'react';

type ApplyButtonProps = {
  onApply: () => void;
};

const ApplyButton: React.FC<ApplyButtonProps> = ({ onApply }) => {
  return (
    <button onClick={onApply}>Apply Profile</button>
  );
};

export default ApplyButton;
