import React from 'react';
import '../../App.css';
import { FaBriefcase } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { RiGraduationCapFill } from 'react-icons/ri';
import { Flex, Heading, Icon, Image, Tag, Text } from '@chakra-ui/react';

import { Data } from '../../data/Types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface PropsType {
    props: Data;
    isWork: boolean;
}

const TimelineElement: React.FC<PropsType> = ({ props, isWork }) => {
    const bgColor = isWork ? '#02294f' : '#c53030';
    const borderColor = isWork ? '#0e4c8a' : '#f56565';

    return (
        <VerticalTimelineElement
            dateClassName='timeline-date'
            contentStyle={{
                background: bgColor,
                color: '#fff',
                boxShadow: '0 0 1px #ccc',
                borderTop: '2px solid ' + borderColor,
                textAlign: 'left',
                paddingBottom: '0.75em'
            }}
            contentArrowStyle={{ borderRight: '10px solid ' + bgColor }}
            date={props.date}
            iconStyle={{ background: bgColor, color: '#fff' }}
            icon={<Icon as={isWork ? FaBriefcase : RiGraduationCapFill} />}
        >
            <Flex>
                <Flex w={{ base: '100%', sm: '80%' }} flexDirection='column'>
                    <Heading
                        fontSize={{ base: 'md', sm: 'xl', md: '2xl' }}
                        mb='2'
                        style={{ color: 'white' }}
                    >
                        {props.title}
                    </Heading>
                    <Text style={{ margin: '0' }}>
                        <Icon
                            as={isWork ? FaBriefcase : RiGraduationCapFill}
                            fontSize={{ base: '2xs', sm: 'xs', md: 'sm' }}
                            me='1'
                        />
                        {props.company}
                    </Text>
                    <Text
                        style={{ margin: '0 0 2em 0' }}
                    >
                        <Icon as={FaLocationDot} me='1' ms='-2px' />
                        {props.location}
                    </Text>
                </Flex>
                <Flex
                    display={{ base: 'none', sm: 'flex' }}
                >
                    <Image
                        src={props.logo}
                        fit='cover'
                        alt='Logo'
                        boxSize={{ sm: '2.5em', xl: '3em' }}
                        borderRadius='full'
                    />
                </Flex>
            </Flex>
            {props.skills.map((skill, index) => (
                <Tag
                    me='2'
                    mt='2'
                    size={{ base: 'sm', sm: 'md' }}
                    key={index + '_' + skill}
                >
                    {skill}
                </Tag>
            ))}
        </VerticalTimelineElement>
    );
};

export default TimelineElement;