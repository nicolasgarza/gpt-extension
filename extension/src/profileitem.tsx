import { useState } from "react";
import EditMenu from "./EditMenu";

interface ProfileItemProps {
  id: string;
  title: string;
  deleteProfile: (id: string) => void;
  editProfile: (id: string) => void;
}

export function ProfileItem({
  id,
  title,
  deleteProfile,
  editProfile,
}: ProfileItemProps) {
  const [isEditMenuOpen, setEditMenuOpen] = useState(false);

  const handleEditClick = () => {
    setEditMenuOpen(!isEditMenuOpen);
  };

  const handleEditPlugins = () => {
    // Implement your edit plugins logic
  };

  const handleDeleteProfile = () => {
    // Implement your delete profile logic
  };

  return (
    <li>
      <label>{title}</label>
      <div>
        <button onClick={handleEditClick} className="btn btn-primary">
          Edit
        </button>
        <button onClick={() => deleteProfile(id)} className="btn btn-danger">
          Delete
        </button>
      </div>
      {isEditMenuOpen && (
        <EditMenu
          onEdit={handleEditPlugins}
          onDelete={handleDeleteProfile}
        />
      )}
    </li>
  );
}
 