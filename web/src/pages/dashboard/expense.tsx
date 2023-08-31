// src/components/FinancialInfo.tsx

import React from 'react';
import styled from 'styled-components';

interface FinancialInfoProps {
    currentBalance: number;
    expensesThisMonth: number;
    recurringExpenses: number;
    budget: number;
    monthlyGoal: number;
}

const InfoBox = styled.div`
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Label = styled.span`
    font-weight: bold;
`;

const FinancialInfo: React.FC<FinancialInfoProps> = ({
    currentBalance,
    expensesThisMonth,
    recurringExpenses,
    budget,
    monthlyGoal,
}) => {
    return (
        <div>
            <InfoBox>
                <Label>Current Balance:</Label>
                <span>${currentBalance.toFixed(2)}</span>
            </InfoBox>
            <InfoBox>
                <Label>Expenses This Month:</Label>
                <span>${expensesThisMonth.toFixed(2)}</span>
            </InfoBox>
            <InfoBox>
                <Label>Recurring Expenses:</Label>
                <span>${recurringExpenses.toFixed(2)}</span>
            </InfoBox>
            <InfoBox>
                <Label>Budget:</Label>
                <span>${budget.toFixed(2)}</span>
            </InfoBox>
            <InfoBox>
                <Label>Monthly Goal:</Label>
                <span>${monthlyGoal.toFixed(2)}</span>
            </InfoBox>
        </div>
    );
};

export default FinancialInfo;
