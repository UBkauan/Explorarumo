import './Menu.css';
import { Link } from 'react-router-dom';

const MenuComponente = () => {

  return (
    <header className="header">
      <div className="logo-box"></div>

      <div className="buttons">
        <Link to="/pontos">Pontos</Link>
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
