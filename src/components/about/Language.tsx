import React from 'react';
import { Box, Text, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { Lang } from '../../data/Types';

const Language: React.FC<Lang> = ({ lang, level, value }) => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Text mb='3' fontSize={{ base: 'lg', lg: '2xl' }}>{lang}</Text>
            <CircularProgress value={value} color='cyan.400' size='1.8em'>
                <CircularProgressLabel fontSize='lg'>{level}</CircularProgressLabel>
            </CircularProgress>
        </Box>
    );
};

export default Language;