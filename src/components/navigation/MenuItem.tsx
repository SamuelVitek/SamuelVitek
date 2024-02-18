import React, { ReactNode } from "react";
import { Link, Text } from "@chakra-ui/react";

interface MenuItemProps {
    children: ReactNode;
    isActive?: boolean;
    isLast?: boolean;
    to: string;
}

const MenuItem = ({ children, isLast, isActive = false, to = "/", ...rest }: MenuItemProps) => {
    return (
        <Link
            href={to}
            pb={2}
            //TODO isActive set to borderBottom (see hover)
            borderBottom={to === '/' ? '2px solid white' : ''}
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