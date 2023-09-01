import React from 'react';
import {
    HeaderBar,
    Title,
    Greeting,
    ButtonContainer,
    Button,
} from './dashboard.styles'; // adjust the path

const DashboardHeader = () => {
    return (
        <HeaderBar>
            <Title>Expense Tracker</Title>
            <ButtonContainer>
                <Button>Settings</Button>
                <Button>Notifications</Button>
                <Button>Account</Button>
            </ButtonContainer>
        </HeaderBar>
    );
};

export default DashboardHeader;
