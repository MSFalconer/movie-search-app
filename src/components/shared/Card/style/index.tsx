import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 1px solid lightgrey;
    border-radius: 10px;
    overflow: hidden;
`;

export const LinkWrapper = styled.div`
    text-align: center;
    background-color: blue;
    border-radius: 10px;
    margin-top: 1rem;

    a {
        box-sizing: border-box;
        display: block;
        width: 100%;
        color: white;
        padding: 1rem 0;
    }
`;

export const ImageWrapper = styled.div`
    img {
        width: 100%;
        height: auto;
    }
`;

export const ContentWrapper = styled.div`
    padding: 1rem;
`;