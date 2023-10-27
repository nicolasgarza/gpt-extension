interface HeaderProps {
  onButtonClick: () => void;
}

const Header = ({ onButtonClick }: HeaderProps) => {
  return (
    <div className="header-container">
      <h1 className="header">Profile List</h1>
      <button className="btn-header" onClick={onButtonClick}>
        Add Profile
      </button>
    </div>
  );
};

export default Header;
