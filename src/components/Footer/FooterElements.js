import styled, {css} from 'styled-components/macro';
import {FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube} from 'react-icons/fa';


export const Section = styled.section`
    background: #000d1a;
    color: #fff;
    width: 100%;
    min-height: 600px;
    padding: 3rem calc((100vw - 1300px) / 2);
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`;

export const FooterTop = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Quote = styled.div`
    flex: 1; 
    padding: 2rem 0rem;

    h3 {
        font-size: clamp(2rem, 8vw, 5rem);
    }
`;

export const FooterInfo = styled.div`
    padding: 2rem;
    line-height: 3;
    display: flex;
    flex-direction: column;

    a {
        color: #fff;
        text-decoration: none;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 0rem;
    }
`;

export const FooterBottom = styled.div`
    display: flex;
    padding: 2rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Icons = css `
    font-size: clamp(1rem, 6vw, 2rem);
    margin-right: 1.5rem;
    color: #cd853f;
`;

export const SocialIcons = styled.div`
    display: flex;
    width: 50%;

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
        width: 100%;
    }
`;

export const Instagram = styled(FaInstagram)`
    ${Icons}
`;

export const Facebook = styled(FaFacebookF)`
    ${Icons}
`;

export const LinkedIn = styled(FaLinkedinIn)`
    ${Icons}
`;

export const Youtube = styled(FaYoutube)`
    ${Icons}
`;

export const Contact = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
    }
`;