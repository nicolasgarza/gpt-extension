// app.tsx
import { FC, useEffect, useState } from "react";
import "./styles.css";
import { ProfileList } from "./ProfileList";
import Header from "./Header";
import AddMenu from "./AddMenu";

export interface ProfileProp {
  id: string;
  title: string;
  plugin1: string;
  plugin2: string;
  plugin3: string;
}

const App: FC = () => {
  const [isAddMenuOpen, setAddMenuOpen] = useState(false);

  const [profiles, setProfiles] = useState<ProfileProp[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(profiles));
  }, [profiles]);

  const pluginDict = {
    "Plugin 1": null,
    "Plugin 2": null,
    "Plugin 3": null,
  }

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

  function updateProfileTitle(id: string, title: string) {
    setProfiles((currentProfiles: ProfileProp[]) =>
      currentProfiles.map((profile: ProfileProp) =>
        profile.id === id ? { ...profile, title } : profile
      )
    );
  }

  function updateProfilePlugin1(id: string, plugin1: string) {
    setProfiles((currentProfiles: ProfileProp[]) =>
      currentProfiles.map((profile: ProfileProp) =>
        profile.id === id ? { ...profile, plugin1 } : profile
      )
    );
  }

  function deleteProfile(id: string) {
    setProfiles((currentProfiles: ProfileProp[]) =>
      currentProfiles.filter((profile: ProfileProp) => profile.id !== id)
    );
  }

  return (
    <>
      <Header onButtonClick={() => setAddMenuOpen((prevAddMenuOpen) => !prevAddMenuOpen)} />
      {isAddMenuOpen && <AddMenu onClose={() => setAddMenuOpen(false)} addProfile={addProfile} pluginList = {pluginDict} />}
      <ProfileList profiles={profiles} deleteProfile={deleteProfile} updateProfileTitle={updateProfileTitle}/>
    </>
  );
};

export default App;
