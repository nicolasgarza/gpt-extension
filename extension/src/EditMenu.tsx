// EditMenu.tsx
import * as React from "react";

interface EditMenuProps {
  profileTitle: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  handleSave: () => void;
}

const EditMenu: React.FC<EditMenuProps> = ({
  profileTitle,
  handleNameChange,
  handleSave
}) => {

  return (
    <>
    <div className="edit-menu">
      <h2>Edit Profile</h2>
      <label htmlFor="item">Rename: </label>
      <input 
      type="text"
      value={profileTitle}
      onChange={handleNameChange}
      id="item"
      />
      <button onClick={handleSave}>Save</button>
    </div>
    </>
  );
};

export default EditMenu;
