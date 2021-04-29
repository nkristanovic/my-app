import React from 'react';
import {
    Section as SectionWrapper,
    Title
} from './SectionStyle';

const Section = ({
    children,
    title,
    withoutTopPadding
}) => {
    const sectionClassName = withoutTopPadding ? 'Section topPadding_none' : 'Section';
    return (
        <SectionWrapper className={sectionClassName}>
            {title && <Title>{ title }</Title>}
            { children }
        </SectionWrapper>
    );
}
export default Section;