import React, { ReactNode, useEffect, useState } from 'react';
import { Link, Text } from '@chakra-ui/react';

interface MenuItemProps {
    children: ReactNode;
    isLast?: boolean;
    setActive?: () => void;
    to: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, isLast, setActive, to, ...rest }) => {
    const [activePath, setActivePath] = useState<string>();

    useEffect(() => {
        setActivePath(window.location.pathname)
    }, [window.location.pathname]);

    return (
        <Link
            href={to}
            pb={2}
            onClick={setActive}
            borderBottom='2px solid'
            borderColor={activePath === to && !isLast ? 'cyan.400' : 'transparent'}
            _hover={{
                textDecoration: 'none',
                borderBottom: !isLast && activePath != to ? '2px solid white' : ''
            }}
        >
            <Text display='block' {...rest} color={activePath === to ? 'cyan.400' : 'white'}>
                {children}
            </Text>
        </Link>
    );
};

export default MenuItem;