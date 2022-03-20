import styled from 'styled-components';

export const Wrapper = styled.section`
   width: 100%;

   header {
    max-width: 420px;
    margin: 0 auto;
   }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 420px;

    label {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    input {
        height: 50px;
        padding: 10px;
    }
`;