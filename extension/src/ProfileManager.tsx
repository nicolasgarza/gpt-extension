// ProfileManager.tsx
import React, { useState } from 'react';
import { Profile, ChatGPTPlugin } from './types'; // Import your types

type ProfileManagerProps = {
    profiles: Record<string, Profile>; // A record of profile names to Profile objects
    setProfiles: (profiles: Record<string, Profile>) => void; // A function to update the profiles
  };
  

const ProfileManager: React.FC<ProfileManagerProps> = ({ profiles, setProfiles }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');

  const addProfile = () => {
    if (newProfileName && !profiles[newProfileName]) {
      const newProfile: Profile = {
        name: newProfileName,
        plugins: [] // Initially empty, you can have a default set if you want
      };
      setProfiles({ ...profiles, [newProfileName]: newProfile });
      setNewProfileName('');
      setFormVisible(false);
    }
  };

  const deleteProfile = (profileName: string) => {
    const { [profileName]: _, ...remainingProfiles } = profiles;
    setProfiles(remainingProfiles);
  };

  return (
    <div>
      <h2>Profile Manager</h2>
      <button onClick={() => setFormVisible(true)}>Add Profile</button>
      {isFormVisible && (
        <div>
          <input
            type="text"
            placeholder="Profile Name"
            value={newProfileName}
            onChange={(e) => setNewProfileName(e.target.value)}
          />
          <button onClick={addProfile}>Save</button>
        </div>
      )}
      <ul>
        {Object.keys(profiles).map((profileName) => (
          <li key={profileName}>
            {profileName}
            <button onClick={() => deleteProfile(profileName)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileManager;
