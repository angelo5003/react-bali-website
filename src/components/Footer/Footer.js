import React from 'react';
import {Link} from 'react-router-dom';
// import {css} from 'styled-components/macro';
import {Button} from '../Button/Button';
import {IoMdArrowRoundForward} from 'react-icons/io';
// import {FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube} from 'react-icons/fa';

import {Section, Container, FooterTop, Quote, FooterInfo, FooterBottom, SocialIcons, Youtube, Instagram, Facebook, LinkedIn, Contact} from './FooterElements';


const Footer = () => {
    return (
       <Section>
           <Container>
               <FooterTop>
                   <Quote>
                       <h3>Let's find <br/> your Dream Home</h3>
                   </Quote>
                    <FooterInfo>
                        <h4>Contact Us</h4>
                        <Link to='/homes'>FAQ</Link>
                        <Link to='/homes'>Support</Link>
                        <Link to='/homes'>Questions</Link>
                    </FooterInfo>
                    <FooterInfo>
                        <h4>Offices</h4>
                        <Link to='/homes'>United States</Link>
                        <Link to='/homes'>Europe</Link>
                        <Link to='/homes'>Asia</Link>
                    </FooterInfo>
               </FooterTop>
               <FooterBottom>
                   <SocialIcons>
                       <a href='//www.google.com' rel='noopener noreferrer' target='_blank'><Youtube/></a>
                       <a href='//www.google.com' rel='noopener noreferrer' target='_blank'><Instagram/></a>
                       <a href='//www.google.com' rel='noopener noreferrer' target='_blank'><Facebook/></a>
                       <a href='//www.google.com' rel='noopener noreferrer' target='_blank'><LinkedIn/></a>
                   </SocialIcons>
                   <Contact>
                       <Button to='/homes'>
                           Let's chat <IoMdArrowRoundForward/>
                       </Button>
                   </Contact>
               </FooterBottom>
           </Container>
       </Section>
    );
};

export default Footer;