
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/resume/" className="navItems">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume/skills/" className="navItems">
            Skills
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume/experience/" className="navItems">
            Experience
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume/education/" className="navItems">
            Education
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume/interests/" className="navItems">
            Interests
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume/about/" className="navItems">
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* <div className="navbar">
        <Link to="/">
          <div className="profile">
            <img src={photo} alt="ANEES MANGI" className="profile-photo" />
            <h2>ANEES MANGI</h2>
            Software Engineer
          </div>
        </Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education & Certifications</Link>
        <Link to="/interests">Interests</Link>
        <Link to="/about">About</Link>
      </div> */}
    </>
  );
}

export default Navbar;
