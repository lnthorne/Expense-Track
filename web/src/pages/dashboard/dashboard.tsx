import React, { useEffect, useState } from 'react';
import FinancialInfo from './expense';
import { GetCurrentUser } from 'src/utils/user';
import {
    IExpense,
    IRecurringExpense,
    ISharedExpense,
} from '@interfaces/expense.interface';
import { IUser } from '@interfaces/users.interface';
import { GetExpenseData } from 'src/utils/expense';
import { Endpoint } from 'src/utils/endpoints';

const DashboardComponent: React.FC = () => {
    const [expense, setExpense] = useState<IExpense[]>();
    const [sharedExpense, setSharedExpense] = useState<ISharedExpense[]>();
    const [recurringExpenses, setRecurringExpenses] =
        useState<IRecurringExpense[]>();
    const [isExpensesLoading, setExpensesLoading] = useState<boolean>(true);
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await GetCurrentUser();
                setUser(user.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchAllExpenses = async () => {
            try {
                const expenseData = await GetExpenseData(Endpoint.ALL_EXPENSES);
                setExpense(expenseData.data.expenses);
                setSharedExpense(expenseData.data.sharedExpenses);
                setRecurringExpenses(expenseData.data.recurringExpenses);
            } catch (error) {
                console.error(error);
            } finally {
                setExpensesLoading(false);
            }
        };

        fetchUser();
        fetchAllExpenses();
    }, [expense, sharedExpense, recurringExpenses]);

    return (
        <div className="App">
            {isExpensesLoading ? (
                <div>Loading</div>
            ) : (
                <FinancialInfo
                    currentBalance={5000}
                    expensesThisMonth={expense![0].amount}
                    recurringExpenses={expense![1].amount}
                    budget={4000}
                    monthlyGoal={3500}
                />
            )}
        </div>
    );
};

export default DashboardComponent;
