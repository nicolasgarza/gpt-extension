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
  const [isAddMenuOpen, setAddMenuOpen] = useState(false);

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
    setAddMenuOpen(false);
  }

  function deleteProfile(id: string) {
    setProfiles((currentProfiles: ProfileItemProp[]) =>
      currentProfiles.filter((profile: ProfileItemProp) => profile.id !== id)
    );
  }

  const handleEditButtonClick = () => {
    setEditMenuOpen(true);
  }
  function editProfile(id: string) {
    console.log(`Editing profile ${id}`);
    setEditMenuOpen((prevEditMenuOpen) => !prevEditMenuOpen); 
  }

  return (
    <>
      <Header onButtonClick={() =>  setAddMenuOpen((prevAddMenuOpen) => !prevAddMenuOpen)} />
      {isAddMenuOpen && <AddMenu onClose={() => setAddMenuOpen(false)} addProfile={addProfile} />}
      <ProfileList profiles={profiles} deleteProfile={deleteProfile} editProfile={editProfile} onEditButtonClick={handleEditButtonClick} />
      {isEditMenuOpen && (
        <EditMenu
          profiles={profiles}
          onEdit={() => setEditMenuOpen(false)} 
          onDelete={deleteProfile}
          onClose={() => setEditMenuOpen(false)} 
        />
      )}
    </>
  );
};

export default App;
