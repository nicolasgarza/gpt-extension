interface HeaderProps {
    onButtonClick: () => void;
}

const Header = ({ onButtonClick }: HeaderProps) => {
  return (
    <div>
    <h1 className="header">Todo List</h1>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
};

export default Header;
