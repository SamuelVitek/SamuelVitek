import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Heading, Image, Tag, Text } from "@chakra-ui/react";
import { faBriefcase, faLocationDot, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Data } from "../../data/Types";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface PropsType {
    props: Data;
    isWork: boolean;
}

const TimelineElement = ({props, isWork}: PropsType) => {
    const bgColor = isWork ? '#02294f' : '#c53030';
    const borderColor = isWork ? '#0e4c8a' : '#f56565';

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
                background: bgColor,
                color: '#fff',
                boxShadow: '0 0 1px #ccc',
                borderTop: '2px solid ' + borderColor,
                textAlign: 'left',
                paddingBottom: '0.75em'
            }}
            contentArrowStyle={{borderRight: '10px solid ' + bgColor}}
            date={props.date}
            iconStyle={{background: bgColor, color: '#fff'}}
            icon={<FontAwesomeIcon icon={isWork ? faBriefcase : faGraduationCap}/>}
        >
            <Flex>
                <Flex w='80%' flexDirection='column'>
                    <Heading style={{color: 'white'}}>{props.title}</Heading>
                    <Text style={{margin: '0'}}>
                        <FontAwesomeIcon icon={isWork ? faBriefcase : faGraduationCap}/> {props.company}
                    </Text>
                    <Text style={{margin: '0 0 2.25em 0'}}>
                        <FontAwesomeIcon icon={faLocationDot}/> {props.location}
                    </Text>
                </Flex>
                <Flex>
                    <Image src={props.logo} fit='cover' alt='Logo' w='3.125em' h='3.125em' borderRadius='full'/>
                </Flex>
            </Flex>
            {props.skills.map((skill, index) => (
                <Tag me='2' key={index + '_' + skill}>{skill}</Tag>
            ))}
        </VerticalTimelineElement>
    );
};

export default TimelineElement;