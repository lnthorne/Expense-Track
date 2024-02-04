import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const LoginBox = styled.div`
    padding: 2rem 4rem;
    width: 90%;
    max-width: 600px; // Ensures that the box doesn't get too wide on larger screens
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    box-shadow: 0px 8px 36px #222;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        // Adjustments for tablet and above screens
        padding: 3rem 6rem;
    }
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    color: white;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        font-size: 2.2rem;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.6rem 1.2rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;

    &:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.5); // Adjusted focus border color
    }

    @media (min-width: 768px) {
        padding: 0.7rem 1.4rem;
        font-size: 1.1rem;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    background: #4ecca3;
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    font-size: 1.1rem;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
        background-color: #3ca381;
    }

    @media (min-width: 768px) {
        padding: 0.7rem 1.4rem;
        font-size: 1.2rem;
    }
`;

export const ErrorMessage = styled.p`
    color: #ff0033;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

export const ToggleText = styled.p`
    font-size: 1rem;
    margin-top: 1.5rem;
    color: white;

    span {
        cursor: pointer;
        color: #4ecca3;
        font-weight: bold;
        margin-left: 5px;
    }

    @media (min-width: 768px) {
        font-size: 1.1rem;
    }
`;
