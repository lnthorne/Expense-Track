import React from 'react';
import FinancialInfo from './financialInfo';
import { GetCurrentUser } from 'src/utils/user';

const DashboardComponent: React.FC = () => {
    const test = async () => {
        const res = await GetCurrentUser();
        console.log(res);
    };

    test();
    return (
        <div className="App">
            <FinancialInfo
                currentBalance={5000}
                expensesThisMonth={1200}
                recurringExpenses={200}
                budget={4000}
                monthlyGoal={3500}
            />
        </div>
    );
};

export default DashboardComponent;
