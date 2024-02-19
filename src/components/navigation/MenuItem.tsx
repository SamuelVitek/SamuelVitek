import React, {ReactNode} from "react";
import {Link, Text} from "@chakra-ui/react";

interface MenuItemProps {
    children: ReactNode;
    isLast?: boolean;
    to: string;
}

const MenuItem = ({children, isLast, to = "/", ...rest}: MenuItemProps) => {
    const activePath = '/' + window.location.hash;
    const href = process.env.PUBLIC_URL + to;

    return (
        <Link
            href={href}
            pb={2}
            borderBottom={(activePath === to && !isLast) ? '2px solid white' : ''}
            _hover={{
                textDecoration: 'none',
                borderBottom: !isLast ? '2px solid white' : ''
            }}
        >
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

export default MenuItem;