import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(120deg, #f6d365, #fda085);
`;

export const LoginBox = styled.div`
    padding: 2rem 4rem;
    width: 300px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 8px 36px #222;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 2rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
`;

export const Button = styled.button`
    cursor: pointer;
    background: #fda085;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f67c54;
    }
`;

export const ErrorMessage = styled.p`
    color: #ff0033;
    margin-bottom: 1rem;
    font-size: 0.85rem;
`;

export const ToggleText = styled.p`
    font-size: 0.9rem;
    margin-top: 1rem;
    color: #777;

    span {
        cursor: pointer;
        color: #fda085;
        font-weight: bold;
        margin-left: 5px;
    }
`;
