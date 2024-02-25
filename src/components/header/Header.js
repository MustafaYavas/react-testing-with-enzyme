import './Header.scss';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>React Test</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
