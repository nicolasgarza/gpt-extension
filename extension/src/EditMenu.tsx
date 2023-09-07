// EditMenu.tsx
import { ProfileProp } from "./App";
import { useState, useEffect } from "react"; // Import useState

interface EditMenuProps {
  profiles: ProfileProp[];
  selectedProfileId: string | null; // Add selectedProfileId prop
  onDelete: (id: string) => void;
  onClose: () => void;
}

const EditMenu: React.FC<EditMenuProps> = ({
  profiles,
  selectedProfileId,
  onDelete,
  onClose,
}: EditMenuProps) => {
  const [selectedProfile, setSelectedProfile] = useState<ProfileProp | null>(null);

  useEffect(() => {
    if (selectedProfileId) {
      const profile = profiles.find((p) => p.id === selectedProfileId);
      setSelectedProfile(profile || null);
    }
  }, [selectedProfileId, profiles]);

  if (!selectedProfile) {
    return null;
  }

  return (
    <div className="edit-menu">
      <h2>Edit Profile</h2>
      <div className="edit-form">
        <label htmlFor="plugin1">Edit Plugin 1:</label>
        <select id="plugin1" defaultValue={selectedProfile.plugin1}>
          {/* Dropdown options for Plugin 1 */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <label htmlFor="plugin2">Edit Plugin 2:</label>
        <select id="plugin2" defaultValue={selectedProfile.plugin2}>
          {/* Dropdown options for Plugin 2 */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <label htmlFor="plugin3">Edit Plugin 3:</label>
        <select id="plugin3" defaultValue={selectedProfile.plugin3}>
          {/* Dropdown options for Plugin 3 */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <button className="btn btn-danger" onClick={() => onDelete(selectedProfile.id)}>
        Delete
      </button>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default EditMenu;
