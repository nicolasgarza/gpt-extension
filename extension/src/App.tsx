import React, { useState } from 'react';
import './App.css';
import ProfileDropdown from './ProfileDropdown';
import ProfileManager from './ProfileManager';
import ApplyButton from './ApplyButton';
import {Profile, ChatGPTPlugin} from './types';

type Plugin = {
   id: string;
   name: string;
   enabled: boolean;
};
 
const App: React.FC = () => {
  const [profiles, setProfiles] = useState<Record<string, Profile>>({
    'Default': {
      name: 'Default',
      plugins: [
        { id: '1', name: 'Plugin 1', enabled: true },
        { id: '2', name: 'Plugin 2', enabled: false },
      ],
    },
    'Profile 2': {
      name: 'Profile 2',
      plugins: [
        { id: '1', name: 'Plugin 1', enabled: false },
        { id: '2', name: 'Plugin 2', enabled: true },
      ],
    },
  });

  const [selectedProfile, setSelectedProfile] = useState<string>('Default');

  const onSelectProfile = (profileName: string) => {
    setSelectedProfile(profileName);
  }

  const onApplyProfile = () => {
    // Logic to apply the profile
  };

  return (
    <div className="App">
      <h1>ChatGPT Plugin Profiles</h1>
      <ProfileDropdown
        profiles={profiles}
        selectedProfile={selectedProfile}
        onSelectProfile={onSelectProfile}
      />

      <ProfileManager profiles={profiles} setProfiles={setProfiles} />
      <ApplyButton onApply={onApplyProfile} />
    </div>
  );
};
export default App;