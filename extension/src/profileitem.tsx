import { useState } from "react";
import { ProfileProp } from "./App";
import EditMenu from "./EditMenu";

interface ProfileItemProps extends ProfileProp {
  isMenuOpen: boolean;
  toggleMenu: (profileId: string) => void;
  deleteProfile: (id: string) => void;
  updateProfileTitle: (id: string, title: string) => void;
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
}) => {
  const [profileTitle, setProfileTitle] = useState(title);

  const handleEdit = () => {
    toggleMenu(id);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileTitle(e.target.value);
  };

  const handleSave = () => {
    updateProfileTitle(id, profileTitle);
    console.log("Plugin 1: " + plugin1 + " Plugin 2: " + plugin2 + " Plugin 3: " + plugin3);
    toggleMenu(id);
  };

  return (
    <div className={`profile-item-container ${isMenuOpen ? 'isMenuOpen' : ''}`}>
      <li>
        <label>{title}</label>
        <button onClick={handleEdit} className="btn btn-primary">
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
          handleNameChange={handleNameChange}
          deleteProfile={deleteProfile}
          handleSave={handleSave}
        />
      )}
    </div>
  );
   
};

export default Profileitem;