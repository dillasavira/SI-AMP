import React, { useState } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const NavBarKu =(props)=>{
    const [isOpen, setIsOpen]= useState(false);
    const toggle =()=> setIsOpen(!isOpen);
    
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">ReactStrapt</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mahasiswa">Mahasiswa</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}


export default NavBarKu;