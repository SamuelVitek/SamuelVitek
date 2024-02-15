import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Heading, Image, Tag, Text } from "@chakra-ui/react";
import { faBriefcase, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Data } from "../../data/Types";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface PropsType {
    data: Data;
}

const TimelineElement = ({data}: PropsType) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
                background: 'rgb(2, 41, 79)',
                color: '#fff',
                boxShadow: '0 0 1px #ccc',
                borderTop: '2px solid rgb(14, 76, 138)',
                textAlign: 'left',
                paddingBottom: '0.75em'
            }}
            contentArrowStyle={{borderRight: '7px solid  rgb(2, 41, 79)'}}
            date={data.date}
            iconStyle={{background: 'rgb(2, 41, 79)', color: '#fff'}}
            icon={<FontAwesomeIcon icon={faBriefcase}/>}
        >
            <Flex>
                <Flex w='80%' flexDirection='column'>
                    <Heading style={{color: 'white'}}>{data.title}</Heading>
                    <Text style={{margin: '0'}}>
                        <FontAwesomeIcon icon={faBriefcase}/> {data.company}
                    </Text>
                    <Text style={{margin: '0 0 2.25em 0'}}>
                        <FontAwesomeIcon icon={faLocationDot}/> {data.location}
                    </Text>
                </Flex>
                <Flex>
                    <Image src={data.logo} fit='cover' alt='Logo' w='3.125em' h='3.125em' borderRadius='full'/>
                </Flex>
            </Flex>
            {data.skills.map((skill, index) => (
                <Tag me='2' key={index + '_' + skill}>{skill}</Tag>
            ))}
        </VerticalTimelineElement>
    );
};

export default TimelineElement;