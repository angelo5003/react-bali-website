import React from 'react';

import { Button } from '../Button/Button';
import {Section, Container, Wrap, ColumnLeft, Content, ColumnRight, Image} from './FeaturesElements';
import ImageOne from '../../images/kitchen-1.jpg';

const Features = () => {
    return (
       <Section>
           <Container>
               <Wrap>
                   <ColumnLeft>
                        <Content
                         data-aos='fade-right'
                         data-aos-duration='1200'
                         data-aos-delay='300'
                         data-aos-once='true'
                         data-aos-anchor-placement='center-bottom'
                        >
                            <h1> Stunning Interior</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus nesciunt veniam doloremque ipsum nam excepturi nihil soluta perspiciatis       quibusdam.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, vel!</p>
                            <Button to='/homes'>Learn More</Button>
                        </Content>
                   </ColumnLeft>
                   <ColumnRight>
                    <Image src={ImageOne}
                    data-aos='fade-left'
                    data-aos-duration='1200'
                    data-aos-once='true'
                    data-aos-anchor-placement='center-bottom'/>
                   </ColumnRight>
               </Wrap>
           </Container>
       </Section>
    );
};

export default Features;
 