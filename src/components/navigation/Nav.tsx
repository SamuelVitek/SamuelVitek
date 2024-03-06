import React from 'react';
import Logo from './Logo';
import NavBarContainer from './NavBarContainer';
import MenuToggle from './MenuToggle';
import MenuLinks from './MenuLinks';

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer>
            <Logo/>
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <MenuLinks isOpen={isOpen}/>
        </NavBarContainer>
    );
};

export default Nav;