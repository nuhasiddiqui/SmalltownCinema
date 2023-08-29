import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

import Logo from '../../images/BlueMoon.jpg'

const Header = () => {
    const userContext = useContext(UserContext);
    const currentUser = userContext.currentUser;


	return (
		<>
			<header>	
				{currentUser && currentUser.isAuthenticated &&
             	  <div id="loggedin">You are currently logged in as {currentUser.username} <br/></div>
				}			
				<Nav>
					<Navbar bg="light" variant="light" expand="lg">
						<Container>
							<Navbar.Brand>
								<img src={Logo} alt="Blue Moon Logo"/>
							</Navbar.Brand>
							
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="justify-content-center">
									<LinkContainer to="/">
										<Nav.Link>Home</Nav.Link>
									</LinkContainer>
									<LinkContainer to="/Login">
										<Nav.Link>Login/Logout</Nav.Link>
									</LinkContainer>
									{(currentUser) && currentUser.isAuthenticated &&
										<NavDropdown title="Options" id="basic-nav-dropdown">
											<LinkContainer to="/Option1">
												<NavDropdown.Item>Option 1</NavDropdown.Item>
											</LinkContainer>
											<LinkContainer to="/Option2">
												<NavDropdown.Item>Option 2</NavDropdown.Item>
											</LinkContainer>
										</NavDropdown>
									}
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</Nav>
			</header>
		</>
	);
};

export default Header;
