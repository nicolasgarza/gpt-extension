// EditMenu.tsx
import * as React from "react";
import { ProfileProp } from "./App";

interface EditMenuProps extends ProfileProp {
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  deleteProfile: (id: string) => void;
  handleSave: () => void;
}

const EditMenu: React.FC<EditMenuProps> = ({
  title,
  id,
  plugin1,
  plugin2,
  plugin3,
  handleNameChange,
  deleteProfile,
  handleSave
}) => {

  return (
    <>
    <div className="edit-menu">
      <h2>Edit Profile</h2>
      <label htmlFor="item">Rename: </label>
      <input 
      type="text"
      value={title}
      onChange={handleNameChange}
      id="item"
      />
      <button onClick={handleSave}>Save</button>
      <button className="btn btn-danger" onClick={() => deleteProfile(id)}>Delete</button>
    </div>
    </>
  );
};

export default EditMenu;
