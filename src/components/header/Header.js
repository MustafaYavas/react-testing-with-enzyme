import './Header.scss';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header data-test="header-component">
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="logo" data-test="logo-img" />
          <span>React Test</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
