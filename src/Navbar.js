import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <img class="top" src="/images/name-logo.png" alt="banner logo" />
      {/* <img class="bottom" src="/images/name-logo-red-varient.png" alt="banner logo" />   */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        </div>
    </nav>
   );
}
 
export default Navbar;