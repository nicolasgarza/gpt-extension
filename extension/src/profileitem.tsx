import { ProfileProp } from "./App";
import { useState } from 'react';
import EditMenu from './EditMenu';
import * as React from "react";

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
  toggleMenu,}) => {

    const [profileTitle, setProfileTitle] = useState(title)

    const handleEdit = () => {
      toggleMenu(id);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setProfileTitle(e.target.value);
    };

    const handleSave = () => {
      console.log(`Saving profile name: ${profileTitle}`)
    };

  return (
    <>
    <li>
      <label>{title}</label>
    <button onClick={handleEdit} className="btn btn-primary">
        Edit
    </button>
    { isMenuOpen && (
      <EditMenu
      profileTitle={profileTitle}
      handleNameChange={handleNameChange}
      handleSave={handleSave}
      />
    )}
    </li>
    </>
  );
}

export default Profileitem;
 