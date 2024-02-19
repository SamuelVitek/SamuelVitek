import React from "react";
import Logo from "./Logo";
import NavBarContainer from "./NavBarContainer";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";

const Nav = (props: any) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <Logo/>
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};

export default Nav;