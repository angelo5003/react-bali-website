import React from 'react';

import {Button} from '../Button/Button';
import {Section, Container, ColumnLeft, ColumnRight} from './InfoSectionElements';

const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image, delay}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft reverse={reverse}
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-once='true'
                data-aos-delay={delay}
                data-aos-anchor-placement='center-bottom'
                >
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/homes' primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home' 
                    data-aos='zoom-out'
                    data-aos-duration='1000'
                    data-aos-once='true'
                    data-aos-delay={delay}
                    data-aos-anchor-placement='center-bottom'/>
                </ColumnRight>
            </Container>
        </Section>
    );
};

export default InfoSection;