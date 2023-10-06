import { useState } from "react";
import { ProfileProp } from "./App";
import EditMenu from "./EditMenu";

interface ProfileItemProps extends ProfileProp {
  isMenuOpen: boolean;
  toggleMenu: (profileId: string) => void;
}

const Profileitem: React.FC<ProfileItemProps> = ({
  title,
  id,
  plugin1, 
  plugin2, 
  plugin3,
  isMenuOpen,
  toggleMenu,
}) => {
  const [profileTitle, setProfileTitle] = useState(title);

  const handleEdit = () => {
    toggleMenu(id);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileTitle(e.target.value);
  };

  const handleSave = () => {
    console.log(`Saving profile name: ${profileTitle}`);
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
          profileTitle={profileTitle}
          handleNameChange={handleNameChange}
          handleSave={handleSave}
        />
      )}
    </div>
  );
   
};

export default Profileitem;