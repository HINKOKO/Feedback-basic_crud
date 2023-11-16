import { Link } from 'react-router-dom';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    textAlign: 'center',
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none', color: '#ff6a95' }}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'whateveer',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a65',
};

export default Header;
