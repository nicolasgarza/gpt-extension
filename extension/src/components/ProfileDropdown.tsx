// ProfileDropdown.tsx
import React from 'react';

type ProfileDropdownProps = {
  profiles: Record<string, { name: string }>;
  selectedProfile: string;
  onSelectProfile: (profileName: string) => void;
};

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ profiles, selectedProfile, onSelectProfile }) => {
  return (
    <div>
      <label htmlFor="profile-select">Select Profile: </label>
      <select
        id="profile-select"
        value={selectedProfile}
        onChange={(e) => onSelectProfile(e.target.value)}
      >
        {Object.keys(profiles).map((profileName) => (
          <option key={profileName} value={profileName}>
            {profileName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProfileDropdown;
