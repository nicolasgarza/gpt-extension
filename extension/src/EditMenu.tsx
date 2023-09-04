interface EditMenuProps {
  onEdit: () => void;
  onDelete: () => void;
}

const EditMenu: React.FC<EditMenuProps> = ({ onEdit, onDelete }) => {
  return (
    <div className="edit-menu">
      <h2>Edit Profile</h2>
      <button onClick={onEdit}>Edit Plugins</button>
      <button onClick={onDelete}>Delete Profile</button>
    </div>
  );
};

export default EditMenu;
