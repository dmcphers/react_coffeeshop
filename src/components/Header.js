import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//import NucampLogo from '../app/assets/img/logo.png';
import CoffeeLogo from '../app/assets/img/coffee_logo.jpg';

//import UserLoginForm from '../features/user/UserLoginForm';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={CoffeeLogo} alt='coffee logo' className='float-start' />
                <h1 className='mt-1'>Cuppa Coffee</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='mx-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link mx-5' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link mx-5' to='/about'>
                            <i className='fa fa-address-card fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link mx-5' to='/products'>
                            <i className='fa fa-address-card fa-lg' /> Products
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link mx-5' to='/store'>
                            <i className='fa fa-address-card fa-lg' /> Store
                        </NavLink>
                    </NavItem>
                </Nav>

            </Collapse>
        </Navbar>


        //     <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        //     <div class="container">
        //         <a class="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">Start Bootstrap</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav mx-auto">
        //                 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
        //                 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
        //                 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
        //                 <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Header;