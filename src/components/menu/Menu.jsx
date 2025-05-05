import './Menu.css';

const MenuComponente = () => {

  return (
    <header className="header">
      <div className="logo-box"></div>

      <div className="buttons">
        <Button>Login</Button>
        <Button>Cadastro</Button>
      </div>
    </header>
  );
};

const Button = ({ children }) => (
  <button className="button">
    {children}
  </button>
);

export default MenuComponente;
