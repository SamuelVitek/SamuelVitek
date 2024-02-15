import React, {ReactNode} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {VerticalTimelineElement} from "react-vertical-timeline-component";

type TimeElementProps = {
    children: ReactNode;
}

const TimelineElement = (props: TimeElementProps) => {
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
            contentArrowStyle={{ borderRight: '7px solid  rgb(2, 41, 79)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(2, 41, 79)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
            {props.children}
        </VerticalTimelineElement>
    );
};

export default TimelineElement;