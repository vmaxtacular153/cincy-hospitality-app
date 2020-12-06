import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { 
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container
} from 'react-bootstrap';
import './navbar.styles.scss';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNabarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle('nav-open');
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor('');
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor('navbar-transparent');
            }
        };

        window.addEventListener('scroll', updateNavbarColor);

        return function cleanup() {
            window.removeEventListener('scroll', updateNavbarColor);
        }
    });

    return (
        <Navbar 
            className={classnames('fixed-top', navbarColor)}
            color-on-scroll='300'
            expand='lg'
        >
            <Container>
                <div className='navbar-translate'>
                    {/* <Navbar.Brand
                        data-placement='bottom'
                        to='/index'
                        target='blank'
                        title='Coded by Vmaxtacular'
                        tag={Link}
                    >
                        Cincy Hospitality
                    </Navbar.Brand > */}
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames('navbar-toggler navbar-toggler navbar-brand', {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNabarCollapse}
                    >
                        <span className='navbar-toggler-bar bar1' />
                        <span className='navbar-toggler-bar bar2' />
                        <span className='navbar-toggler-bar bar3' />
                    </button>
                </div>
                <NavbarCollapse
                    className='justify-content-end'
                    navbar
                    isOpen={ navbarCollapse }
                >
                    <Nav navbar>
                        <NavItem>
                            <Nav.Link
                                className='nav-link'
                                data-placement='bottom'
                                href=''
                            >
                                Instagram
                            </Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link
                                className='nav-link'
                                data-placement='bottom'
                                href=''
                            >
                                Facebook
                            </Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link
                                className='nav-link'
                                data-placement='bottom'
                                href=''
                            >
                                Contact Us
                            </Nav.Link>
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}

export default IndexNavbar;