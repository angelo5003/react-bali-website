import React from 'react';

import {css} from 'styled-components/macro';
import {Section, Container, Heading, InfoRow, InfoWrap, Image, InfoLink, Arrow} from './ListingsElements';
import HomeOne from '../../images/home-1.jpg';
import HomeTwo from '../../images/home-2.jpg';

const Listings = () => {
    return (
        <Section>
            <Container>
                <Heading>
                    <h1
                     data-aos='fade-right'
                     data-aos-duration='1000'
                     data-aos-once='true'
                     data-aos-anchor-placement='center-bottom'
                    >View our newest Homes</h1>
                </Heading>
                <InfoRow>
                    <InfoWrap 
                    data-aos='zoom-out-up'
                    data-aos-duration='1200'
                    data-aos-once='true'
                    data-aos-anchor-placement='center bottom'
                    >
                        <Image src={HomeOne} alt='home'/>
                        <h2>8 bed 10 bath house in Venice, California</h2>
                        <InfoLink to='/homes'>
                            <p>View Details</p>
                            <Arrow/>
                        </InfoLink>
                    </InfoWrap>
                    <InfoWrap
                    data-aos='zoom-out-down'
                    data-aos-duration='1200'
                    data-aos-once='true'
                    data-aos-anchor-placement='center bottom'
                    >
                        <Image src={HomeTwo} alt='home'css={`
                            margin-top: 120px;
                            @media screen and (max-width: 768px){
                                margin-top: 0px;
                            }
                            `}/>
                        <h2>4 bed 2 bath house in Miami, Florida</h2>
                        <InfoLink to='/homes'>
                            <p>View Details</p>
                            <Arrow/>
                        </InfoLink>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </Section>
    );
};

export default Listings;
