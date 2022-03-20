import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 40px 0;

    > ul {
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        list-style: none;

        @media (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (min-width: 1200px) {
            grid-template-columns: repeat(5, 1fr);
        }
    }
`;