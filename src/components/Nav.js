import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nave from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';


const Nav = () => {
 const logout=()=>{
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  window.location.reload(false);

}

  return (
    <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><Link to="/" style={{ color:"white"}}>Resume</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nave className="me-auto">
        <Link to="Register" style={{marginLeft:"20px" , color:"white"}}>Register</Link>
        <Link to="Profiles" style={{marginLeft:"20px" , color:"white"}}>Profiles</Link>
       
      </Nave>
      {localStorage.getItem("user")?
            <div className="" onClick={logout} style={{curser:"pointer",color:"white"}}>Log out</div>
:<div></div>          }
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};
export default Nav;
