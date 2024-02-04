import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap; // Allows items to wrap into the next row if there's not enough space
    align-items: flex-start; // Aligns items at the start of the container
    width: 100%; // This makes sure the container spans the entire width of its parent.
    height: calc(100vh - 60px); // Adjust height as necessary
    justify-content: center; // Centers the content horizontally
    padding-top: 20px;
    gap: 20px; // Adds space between columns and rows

    > div {
        // Assuming direct children are the columns
        flex: 1; // This allows each column to grow equally
        max-width: 25%; // Limits each column to take up to 25% of the container's width
        display: flex; // Makes the column a flex container
        flex-direction: column; // Stacks the items in each column vertically
        align-items: center; // Center items in each column
    }
`;

export const TranslucentBody = styled.div`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin: 15px;
    box-shadow: 0px 8px 36px #222;
`;

export const TranslucentTile = styled.div`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    margin-bottom: 70px; // Adding extra margin at the bottom for footer
    box-shadow: 0px 8px 36px #222;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderBar = styled.div`
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 10px 5%;
`;

export const Title = styled.div`
    font-size: 1.2rem;
`;

export const Greeting = styled.div`
    fonst-size: 3rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px; // Spacing between buttons
`;

export const Button = styled.button`
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #444; // adjust as needed
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #555; // adjust as needed
    }
`;

export const Tile = styled.div`
    width: 23%; // Deducting 1% for spacing
    margin: 1%;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export enum LineColors {
    INCOME = 'rgb(46, 204, 113)',
    EXPENSE = 'rgb(255, 0, 0)',
}
