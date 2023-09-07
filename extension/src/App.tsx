// app.tsx
import { FC, useEffect, useState } from "react";
import "./styles.css";
import { ProfileList } from "./ProfileList";
import Header from "./header";
import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu"; // Import the EditMenu component

export interface ProfileProp {
  id: string;
  title: string;
  plugin1: string;
  plugin2: string;
  plugin3: string;
}

declare global {
  interface Crypto {
    randomUUID: () => string;
  }
}

const App: FC = () => {
  const [isEditMenuOpen, setEditMenuOpen] = useState(false);
  const [isAddMenuOpen, setAddMenuOpen] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null); // Add selectedProfileId state

  const [profiles, setProfiles] = useState<ProfileProp[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(profiles));
  }, [profiles]);

  function addProfile(
    title: string,
    plugin1: string,
    plugin2: string,
    plugin3: string
  ) {
    setProfiles((currentProfiles: ProfileProp[]) => [
      ...currentProfiles,
      { id: crypto.randomUUID(), title, plugin1, plugin2, plugin3 },
    ]);
    setAddMenuOpen(false);
  }

  function deleteProfile(id: string) {
    setProfiles((currentProfiles: ProfileProp[]) =>
      currentProfiles.filter((profile: ProfileProp) => profile.id !== id)
    );
  }

  return (
    <>
      <Header onButtonClick={() => setAddMenuOpen((prevAddMenuOpen) => !prevAddMenuOpen)} />
      {isAddMenuOpen && <AddMenu onClose={() => setAddMenuOpen(false)} addProfile={addProfile} />}
      <ProfileList profiles={profiles} deleteProfile={deleteProfile}/>
      
    </>
  );
};

export default App;
