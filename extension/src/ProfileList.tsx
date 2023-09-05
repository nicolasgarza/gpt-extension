import { ProfileItemProp } from "./App";

interface ProfileListProps {
  profiles: ProfileItemProp[];
  deleteProfile: (id: string) => void;
  editProfile: (id: string) => void;
}

export function ProfileList({
  profiles,
  deleteProfile,
  editProfile,
}: ProfileListProps) {
  return (
    <ul className="list">
      {profiles.length === 0 && <p>No Profiles</p>}
      {profiles.map((profile) => (
        <li className="list-item" key={profile.id}>
          <div className="profile-content">
            <label>{profile.title}</label>
          </div>
          <button 
          className="btn btn-primary"
          onClick={() => editProfile(profile.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteProfile(profile.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
