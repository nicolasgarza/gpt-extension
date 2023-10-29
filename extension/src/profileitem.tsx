import { useState } from "react";
import * as React from "react";
import { ProfileProp } from "./App";
import EditMenu from "./EditMenu";

interface ProfileItemProps extends ProfileProp {
  isMenuOpen: boolean;
  toggleMenu: (profileId: string) => void;
  deleteProfile: (id: string) => void;
  updateProfileTitle: (id: string, title: string) => void;
  editPlugins: (id: string, plugin1?: string, plugin2?: string, plugin3?: string) => void;
  pluginDict: { [key: string]: any};
}

const Profileitem: React.FC<ProfileItemProps> = ({
  title,
  id,
  plugin1, 
  plugin2, 
  plugin3,
  isMenuOpen,
  toggleMenu,
  deleteProfile,
  updateProfileTitle,
  editPlugins,
  pluginDict,
}) => {
  const [profileTitle, setProfileTitle] = useState(title);
  const nameRef = React.createRef<HTMLInputElement>();
  const plugin1Ref = React.createRef<HTMLSelectElement>();
  const plugin2Ref = React.createRef<HTMLSelectElement>();
  const plugin3Ref = React.createRef<HTMLSelectElement>();

  const handleEdit = () => {
    console.log("Plugin 1: " + plugin1 + " Plugin 2: " + plugin2 + " Plugin 3: " + plugin3);
    toggleMenu(id);
  };

  const handleSave = () => {
    const newName = nameRef.current?.value;
    const newPlugin1 = plugin1Ref.current?.value;
    const newPlugin2 = plugin2Ref.current?.value;
    const newPlugin3 = plugin3Ref.current?.value;
    
    if (!newName || newName.trim() === '') {
      alert("Name cannot be blank!");
    } else {
      updateProfileTitle(id, newName);
    }  
    editPlugins(id, newPlugin1, newPlugin2, newPlugin3);
    
    console.log("Plugin 1: " + newPlugin1 + " Plugin 2: " + newPlugin2 + " Plugin 3: " + newPlugin3);
    toggleMenu(id);
  };

  return (
    <div className={`profile-item-container ${isMenuOpen ? 'isMenuOpen' : ''}`}>
      <li>
        <label>{title}</label>
        <button onClick={handleEdit} className="btn">
          Edit
        </button>
      </li>
      {isMenuOpen && (
        <EditMenu
          title={profileTitle}
          id={id}
          plugin1={plugin1}
          plugin2={plugin2}
          plugin3={plugin3}
          deleteProfile={deleteProfile}
          handleSave={handleSave}
          editPlugins={editPlugins}
          pluginList={pluginDict}
          nameRef={nameRef}
          plugin1Ref={plugin1Ref}
          plugin2Ref={plugin2Ref}
          plugin3Ref={plugin3Ref}
        />
      )}
    </div>
  );
   
};

export default Profileitem;