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
  const [isEditMenuOpen, setEditMenuOpen] = useState(false);
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
    setEditMenuOpen((prevEditMenuOpen) => !prevEditMenuOpen); 
  }

  const handleButtonClick = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <>
      <Header onButtonClick={handleButtonClick} />
      {isMenuOpen && <AddMenu onClose={() => setMenuOpen(false)} addProfile={addProfile} />}
      <ProfileList profiles={profiles} deleteProfile={deleteProfile} editProfile={editProfile} />
      {isEditMenuOpen && (
        <EditMenu
          onEdit={() => setEditMenuOpen(false)} // Close the edit menu
          onDelete={() => console.log("Delete profile clicked")}
          onClose={() => setEditMenuOpen(false)} // Close the edit menu
        />
      )}
    </>
  );
};

export default App;
