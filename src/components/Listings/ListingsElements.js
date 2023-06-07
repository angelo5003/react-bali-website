import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {IoMdArrowRoundForward} from 'react-icons/io';


export const Section = styled.section `
    width: 100%;
    height: 100%;
    padding: 10rem calc((100vw - 1300px) / 2);
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem 1rem;
`;

export const Heading = styled.div`
    font-size: 1.5rem;
    padding: 2rem 1rem;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        text-align: start;
    }
`;

export const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const InfoWrap = styled.div`
    padding: 0rem 1rem;
    min-height: 550px;
    height: 100%;

    h2 {
        margin-bottom: 1rem;
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1rem;

`;

export const InfoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000d1a;
    width: 140px;
    transition: 0.3s;

    &:hover {
        transform: translateY(-2px);
    }
`;

export const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 10px;
`;