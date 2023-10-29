import { useState } from "react";
import { ProfileList } from "./ProfileList";

interface AddMenuProps {
  onClose: () => void;
  addProfile: (title: string, plugin1: string, plugin2: string, plugin3: string) => void;
  pluginList: { [key: string]: any};
}

const AddMenu = ({ onClose, addProfile, pluginList }: AddMenuProps) => {
    const [newItem, setNewItem] = useState("")
    const [plugin1, setPlugin1] = useState("")
    const [plugin2, setPlugin2] = useState("")
    const [plugin3, setPlugin3] = useState("")


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (newItem === "") return

        addProfile(newItem, plugin1, plugin2, plugin3);

        setNewItem("")
    }

  return (
    <form onSubmit={handleSubmit}>
    <div className="add-menu">
      <h2 className="add-menu-header">Add Profile</h2>
      <div className="form-row">
        <label htmlFor="item">Name:</label>
        <input 
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text" id="item" className="input-field" />
      </div>
      <div className="form-row">
        <label htmlFor="plugin1">Plugin 1:</label>
        <select id="plugin1" className="input-field" 
                value={plugin1} onChange={(a) => setPlugin1(a.target.value)}>
          <option value="none">None</option>
          {Object.keys(pluginList).map((pluginName) => (
            <option value={pluginName} key={pluginName}>
              {pluginName}
            </option>
          ))}
        </select> 
      </div>
      <div className="form-row">
        <label htmlFor="plugin2">Plugin 2:</label>
        <select id="plugin2" className="input-field" 
                value={plugin2} onChange={(a) => setPlugin2(a.target.value)}>
          <option value="none">None</option>
          {Object.keys(pluginList).map((pluginName) => (
            <option value={pluginName} key={pluginName}>
              {pluginName}
            </option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="plugin3">Plugin 3:</label>
        <select id="plugin3" className="input-field" 
                value={plugin3} onChange={(a) => setPlugin3(a.target.value)}>
          <option value="none">None</option>
          {Object.keys(pluginList).map((pluginName) => (
            <option value={pluginName} key={pluginName}>
              {pluginName}
            </option>
          ))}
        </select>
      </div>
      <div className="button-container">
        <button className="btn btn-secondary" onClick={onClose}>Close</button>
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
    </form>
  );
};

export default AddMenu;
