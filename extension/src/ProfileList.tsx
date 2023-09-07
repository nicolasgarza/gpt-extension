import { ProfileProp } from "./App";
import { ProfileItem } from "./profileitem"
import { useState } from "react"; 

interface ProfileListProps {
  profiles: ProfileProp[];
  deleteProfile: (id: string) => void;
}

export function ProfileList({
  profiles,
  deleteProfile,
}: ProfileListProps) {
  const [isEditMenuOpen, setEditMenuOpen] = useState<number | null>(null);

  const toggleMenu = (profileId: number) => {
    setEditMenuOpen((prevId) => (prevId === profileId ? null : profileId));
  };

  return (
    <ul className="list">
      {profiles.length === 0 && "No Todos"}
      {profiles.map(profile => {
        return (
          <ProfileItem
            {...profile}
            key={profile.id}
            isMenuOpen={isEditMenuOpen === profile.id}
            toggleMenu={toggleMenu}
          />
        )
      })}
    </ul>
  )
}