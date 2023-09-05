// EditMenu.tsx
interface EditMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
}

const EditMenu: React.FC<EditMenuProps> = ({ onEdit, onDelete, onClose }) => {
  return (
    <div className="edit-menu">
      <h2>Edit Profile</h2>
      <div className="edit-form">
        <label htmlFor="plugin1">Edit Plugin 1:</label>
        <select id="plugin1">
          {/* Dropdown options for Plugin 1 */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <label htmlFor="plugin2">Edit Plugin 2:</label>
        <select id="plugin2">
          {/* Dropdown options for Plugin 2 */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <label htmlFor="plugin3">Edit Plugin 3:</label>
        <select id="plugin3">
          {/* Dropdown options for Plugin 3 */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <button className="delete-button" onClick={onDelete}>
        Delete Profile
      </button>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default EditMenu;
