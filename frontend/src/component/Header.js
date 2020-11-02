import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import {Link} from 'react-router-dom'
import roots from '../roots'



const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">INVOICE APPLICATION</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link"to={roots.signup}>SIGN-UP</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={roots.login}>LOGIN</Link>
            </NavItem>
            
            
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;