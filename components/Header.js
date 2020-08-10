import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'




function Header(props) {
  const [isStarbucksHovered, setIsStarbucksHovered] = useState(false)
  const [isDunkinHovered, setIsDunkinHovered] = useState(false)
  const [isStarbucksClicked, setIsStarbucksClicked] = useState(false)
  const [isDunkinClicked, setIsDunkinClicked] = useState(false)
    return (
        <div>
        
        <Navbar className={styles.navbar} sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className={styles.navbarLogo}  href="/">hack-my-coffee</Navbar.Brand>
        <div className={styles.toggle}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown 
          className={styles.dropdown}
          title="Starbucks Drinks" 
          id="StarbucksDrinks"
          {...props}
          onMouseEnter={() => setIsStarbucksHovered(true)}
          onMouseLeave={() => setIsStarbucksHovered(false)}
          onToggle={() => setIsStarbucksClicked(!isStarbucksClicked)}
          show={isStarbucksClicked || isStarbucksHovered}
          >
            
        <NavDropdown.Item className={styles.items} href="#action/3.1">Most Popular</NavDropdown.Item>
        <NavDropdown.Item className={styles.items} href="#action/3.2">Dairy Free</NavDropdown.Item>
        <NavDropdown.Item className={styles.items} href="#action/3.3">On a Budget</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className={styles.items} href="/Starbucks">All Drinks</NavDropdown.Item>
      
      </NavDropdown>
      <NavDropdown 
          title="Dunkin' Drinks" 
          id="DunkinDrinks"
          {...props}
          onMouseEnter={() => setIsDunkinHovered(true)}
          onMouseLeave={() => setIsDunkinHovered(false)}
          onToggle={() => setIsDunkinClicked(!isDunkinClicked)}
          show={isDunkinClicked || isDunkinHovered}
          >
        <NavDropdown.Item href="#action/3.1">Most Popular</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Dairy Free</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">On a Budget</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Dunkin">All Drinks</NavDropdown.Item>
      </NavDropdown>
       
          
         
          <Nav.Link href="/SubmitDrink">Submit a Drink</Nav.Link>
            
        
           
            
          </Nav>
        
        </Navbar.Collapse>
        </div>
      </Navbar>
    
      </div>
    )
}

export default Header;