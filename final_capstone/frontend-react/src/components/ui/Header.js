import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

import './header.css'
import Logo from '../../images/BlueMoon.jpg'
import Navigation from './Navigation';
import Search from './Search';
import Button from './Button';

const Header = () => {
	const pages = [
		{
		  page_id: 1,
		  link: '/',
		  name: 'Home',
		  active: true,
		},
		{
		  page_id: 2,
		  link: '/about',
		  name: 'About',
		  active: false,
		},
		{
		  page_id: 3,
		  link: '/contact',
		  name: 'Contact',
		  active: false,
		},
	  ];
    
	  return (
		<>
		  <header>
			<a href="/" className="logo">
			  Smalltown Cinema
			</a>
			<ul className="nav">
				<Navigation pages={pages} />
			</ul>
			<Search />
			<Button
				icon={<ion-icon name="log-in-outline"></ion-icon>} 
				name='Sign In'
			/>
		  </header>
		</>
	  );
};

export default Header;
