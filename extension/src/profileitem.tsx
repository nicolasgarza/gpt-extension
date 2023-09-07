import { ProfileProp } from "./App";

interface ProfileItemProps extends ProfileProp {
  
}

export function ProfileItem({title,
  id,
  plugin1, 
  plugin2, 
  plugin3,
  isMenuOpen,
  toggleMenu,
}: ProfileProp) {
  return (
    <>
    <li>
      <label>{title}</label>
    <button onClick={() => console.log()} className="btn btn-primary">
        Edit
    </button>
    </li>
    </>
  );
}
 