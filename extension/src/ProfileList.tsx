import { ProfileProp } from "./App";
import { useState } from "react"; 
import Profileitem from "./profileitem"

interface ProfileListProps {
  profiles: ProfileProp[];
  deleteProfile: (id: string) => void;
  updateProfileTitle: (id: string, title: string) => void;
  editPlugins: (id: string, plugin1: string, plugin2: string, plugin3: string) => void;
  pluginDict: { [key: string]: any};
}

export function ProfileList({
  profiles,
  deleteProfile,
  updateProfileTitle,
  editPlugins,
  pluginDict,
}: ProfileListProps) {
  const [isEditMenuOpen, setEditMenuOpen] = useState< string | null>(null);

  const toggleMenu = (profileId: string) => {
    setEditMenuOpen((prevId) => (prevId === profileId ? null : profileId));
  };

  return (
    <ul className="list">
      {profiles.length === 0 && "No Profiles"}
      {profiles.map(profile => {
        return (
          <Profileitem
            {...profile}
            key={profile.id}
            isMenuOpen={isEditMenuOpen === profile.id}
            toggleMenu={toggleMenu}
            deleteProfile={deleteProfile}
            updateProfileTitle={updateProfileTitle}
            editPlugins={editPlugins}
            pluginDict={pluginDict}
          />
        )
      })}
    </ul>
  )
}