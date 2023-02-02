import React from "react";
import Button from '@mui/material/Button';
// import Button from '@mui/material-next/Button';
import { size } from "lodash";
import Link from '@mui/material/Link';

// import { Link } from "react-router-dom";
// import '../styles/navbar.CSS'

// import Container from 'react-bootstrap/Container';

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import {  HiMenu } from "react-icons/hi";

// import{NavBar,Nav,NavDropdowon,Form,FormControl,Button}from 'react-bootstrap';

export function INavbar() {
  return (
    
    // <Navbar bg="light" expand="ra">
    //    <NavDropdown title=" " id="nav-dropdown">
    //     <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
    //     <NavDropdown.Divider />
    //     <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
    //   </NavDropdown>
 
    // </Navbar>
  //   <Button variant="text"> 
 
  //     requst a New ID Card</Button>
  //  <Button
  //   type="submit"
  //   fullWidth
  //   variant="contained"
  //   sx={{ mt: 3, mb: 2 }}
  // >
  //   Sign In
  // </Button>
  <div className="conteinr">
  {/* <Link to='/id_card'>
    requst a New ID Card
</Link > */}
<Link href="/id_card" >requst a New ID Card</Link>
<Button size="large">  Report a Lost ID Card</Button>
<Button size="large"> requst Access</Button>
<Button size="large"> view your Access</Button>
<Button size="large">  bulk upload id requsts</Button>
<Button size="large">  requst VPN access</Button>
<Button size="large">  report a problem with VPN</Button>
  </div>

  );
}

