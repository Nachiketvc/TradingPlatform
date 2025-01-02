import '../index.css';
import Menu from './Menu';

function TopBar() {
  return (
    <div className="topbar-container">
      <nav className="navbar">
        <p>SENSEX:<span style={{ marginLeft: '10px', color: 'red' }}>100.2</span></p>
        <a style={{ textAlign: 'center' }}>
          <img src="images/dash.jpg" alt="Your Image Alt Text"  style={{height: '35px', width: '50px', marginTop: '-6px'}}/>
        </a>
        <p style={{ marginRight: '10px' }}>NIFTY FIFTY: <span style={{ marginLeft: '10px', color: 'red' }}>100.2</span></p>
      </nav>
      <div className="vertical-divider"></div> {/* Partition line */}
      <Menu />
    </div>
  );
}

export default TopBar;