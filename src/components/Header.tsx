import './Header.css'

function Header() {
  return (
    <div className="container">
      <div className="image">
        <img
          className="Header"
          src="./headshot.png"
          alt="Myrrh Khan's face"
          width="175"
        />
      </div>
      <div className="text">
        <h1>Myrrh's Site</h1>
      </div>
    </div>
  );
}

export default Header;

/**
 *       <img
        className="Header"
        src="/headshot.png"
        alt="Myrrh Khan's face"
        width="175"
      />
 */