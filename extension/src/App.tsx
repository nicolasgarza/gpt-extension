// app.tsx
import { FC, useEffect, useState } from "react";
import "./styles.css";
import { ProfileList } from "./ProfileList";
import Header from "./header";
import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu"; // Import the EditMenu component

export interface ProfileItemProp {
  id: string;
  title: string;
  plugin1: string;
  plugin2: string;
  plugin3: string;
}

const App: FC = () => {
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [profiles, setProfiles] = useState<ProfileItemProp[]>(() => {
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
    setProfiles((currentProfiles: ProfileItemProp[]) => [
      ...currentProfiles,
      { id: crypto.randomUUID(), title, plugin1, plugin2, plugin3 },
    ]);
  }

  function deleteProfile(id: string) {
    setProfiles((currentProfiles: ProfileItemProp[]) =>
      currentProfiles.filter((profile: ProfileItemProp) => profile.id !== id)
    );
  }

  function editProfile(id: string) {
    console.log(`Editing profile ${id}`);
    setSelectedProfileId(id); // Set the selected profile ID
  }

  const handleButtonClick = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <>
      <Header onButtonClick={handleButtonClick} />
      {isMenuOpen && <AddMenu onClose={() => setMenuOpen(false)} addProfile={addProfile} />}
      <ProfileList profiles={profiles} deleteProfile={deleteProfile} editProfile={editProfile} />
      {selectedProfileId && (
        <EditMenu
          onClose={() => setSelectedProfileId(null)} // Close the edit menu
          onEdit={() => {
            // Implement your edit plugins logic here
            setSelectedProfileId(null); // Close the edit menu after editing
          }}
          onDelete={() => {
            // Implement your delete profile logic here
            setSelectedProfileId(null); // Close the edit menu after deleting
          }}
        />
      )}
    </>
  );
};

export default App;
