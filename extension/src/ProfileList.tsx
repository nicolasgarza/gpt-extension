import { ProfileItemProp } from "./App";
import { useState } from "react"; 
import EditMenu from "./EditMenu"; // Import the EditMenu component

interface ProfileListProps {
  profiles: ProfileItemProp[];
  deleteProfile: (id: string) => void;
  editProfile: (id: string) => void;
}

export function ProfileList({
  profiles,
  deleteProfile,
  editProfile,
}: ProfileListProps) {
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);

  const handleEditButtonClick = (profileId: string) => {
    setSelectedProfileId(profileId);
  };

  return (
    <ul className="list">
      {profiles.length === 0 && <p>No Profiles</p>}
      {profiles.map((profile) => (
        <li className="list-item" key={profile.id}>
          <div className="profile-content">
            <label>{profile.title}</label>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => handleEditButtonClick(profile.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteProfile(profile.id)}
          >
            Delete
          </button>
          {selectedProfileId === profile.id && (
            <EditMenu
              profiles={profiles}
              selectedProfileId={selectedProfileId}
              onEdit={editProfile}
              onDelete={deleteProfile}
              onClose={() => setSelectedProfileId(null)}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
