// EditMenu.tsx

interface EditMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void; // Include the onClose prop
}

const EditMenu: React.FC<EditMenuProps> = ({ onEdit, onDelete, onClose }) => {
  return (
    <div className="edit-menu">
      <h2>Edit Profile</h2>
      <button onClick={onEdit}>Edit Plugins</button>
      <button onClick={onDelete}>Delete Profile</button>
      <button onClick={onClose}>Close</button> {/* Close button */}
    </div>
  );
};

export default EditMenu;
