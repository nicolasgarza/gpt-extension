// EditMenu.tsx
import * as React from "react";
import { ProfileProp } from "./App";

interface EditMenuProps extends ProfileProp {
  deleteProfile: (id: string) => void;
  handleSave: () => void;
  editPlugins: (id: string, plugin1: string, plugin2: string, plugin3: string) => void;
  pluginList: { [key: string]: any};
}

const EditMenu: React.FC<EditMenuProps> = ({
  title,
  id,
  plugin1,
  plugin2,
  plugin3,
  deleteProfile,
  handleSave,
  editPlugins,
  pluginList,
}) => {
  const [selectedName, setSelectedName] = React.useState(title);
  const [selectedPlugin1, setSelectedPlugin1] = React.useState(plugin1);
  const [selectedPlugin2, setSelectedPlugin2] = React.useState(plugin2);
  const [selectedPlugin3, setSelectedPlugin3] = React.useState(plugin3);
  return (
    <>
    <div className="edit-menu">
      <h2>Edit Profile</h2>
      <label htmlFor="item">Rename: </label>
      <input 
      type="text"
      value={selectedName}
      onChange={(e) => setSelectedName(e.target.value)} 
      id="item"
      />
      <div className="dropdown-wrapper">
      <label htmlFor="plugin1">Plugin 1: </label>
        <select value={selectedPlugin1} 
          onChange={(e) => setSelectedPlugin1(e.target.value)} id="plugin1">
          {Object.keys(pluginList).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
            ))}
        </select> 
        </div>
        <div className="dropdown-wrapper">
      <label htmlFor="plugin2">Plugin 2: </label>
        <select value={selectedPlugin2}
          onChange={(e) => setSelectedPlugin2(e.target.value)} id="plugin2">
          {Object.keys(pluginList).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
            ))}
        </select>
        </div>
        <div className="dropdown-wrapper">
      <label htmlFor="plugin3">Plugin 3: </label>
        <select value={selectedPlugin3} 
          onChange={(e) => setSelectedPlugin3(e.target.value)} id="plugin3">
          {Object.keys(pluginList).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
            ))}
        </select>
        </div>
      <button onClick={handleSave} className="btn">Save</button>
      <button className="btn btn-danger" onClick={() => deleteProfile(id)}>Delete</button>
    </div>
    </>
  );
};

export default EditMenu;
