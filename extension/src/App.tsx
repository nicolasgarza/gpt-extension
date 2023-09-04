import { FC, useEffect, useState } from "react";
import "./styles.css";
import { ProfileList } from "./ProfileList";
import  Header from "./header";
import AddMenu from "./AddMenu";

export interface ProfileItemProp {
  id: string;
  title: string;
  plugin1: string;
  plugin2: string;
  plugin3: string;
}

const App: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [profiles, setProfiles] = useState<ProfileItemProp[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(profiles));
    console.log(profiles)
  }, [profiles]);

  function addProfile(title: string, plugin1: string, plugin2: string, plugin3: string) {
    setProfiles((currentProfiles: ProfileItemProp[]) => [
      ...currentProfiles,
      { id: crypto.randomUUID(), title, plugin1, plugin2, plugin3},
    ]);
  }

  function deleteProfile(id: string) {
    setProfiles((currentProfiles: ProfileItemProp[]) =>
      currentProfiles.filter((profile: ProfileItemProp) => profile.id !== id)
    );
  }

  function editProfile(id: string) {
    console.log(`Editing profile ${id}`);
  }

  const handleButtonClick = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  const handleCloseMenu = () => {
    setMenuOpen(false);
  }

  return (
    <>
      <Header onButtonClick={handleButtonClick}/> 
      {isMenuOpen && <AddMenu onClose={handleCloseMenu} addProfile={addProfile} />}
      <ProfileList profiles={profiles} deleteProfile={deleteProfile} editProfile={editProfile}/> 
    </>
  );
};

export default App;
