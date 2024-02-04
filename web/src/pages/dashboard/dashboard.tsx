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
import {
    Container,
    TranslucentTile,
    TranslucentBody,
} from './dashboard.styles';
import DashboardHeader from './header';
import CircularProgress from '@mui/joy/CircularProgress';
import LineGraph, { LineGraphProps } from './lineGraph';

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const sumExpensesByDate = (expenses: IExpense[]) => {
    const sums = new Map<string, number>(); // Object to hold date:totalAmount key:value pairs

    expenses.forEach((expense) => {
        const formattedDate = new Date(expense.date);
        const date = MONTHS[formattedDate.getMonth()]; // Extract just the date part
        sums.set(date, (sums.get(date) ?? 0) + expense.amount);
    });
    console.log(sums);
    return sums;
};

const prepareExpenseLineGraphData = (expenses: IExpense[]): LineGraphProps => {
    const summedExpenses = sumExpensesByDate(expenses);
    const labels = Array.from(summedExpenses.keys()).sort(); // Sort the dates if needed
    const data = labels.map((label) => summedExpenses.get(label) ?? 0);

    console.log(data);

    return {
        data: {
            labels,
            datasets: [
                {
                    label: 'Daily Expenses',
                    data: data,
                    fill: false,
                    backgroundColor: 'rgb(75, 192, 192)',
                    borderColor: 'rgba(75, 192, 192, 0.2)',
                },
            ],
        },
        options: null,
    };
};

const DashboardComponent: React.FC = () => {
    const [expense, setExpense] = useState<IExpense[]>([]);
    const [sharedExpense, setSharedExpense] = useState<ISharedExpense[]>([]);
    const [recurringExpenses, setRecurringExpenses] = useState<
        IRecurringExpense[]
    >([]);
    const [isExpensesLoading, setExpensesLoading] = useState<boolean>(true);
    const [user, setUser] = useState<IUser>();
    const [animationStage, setAnimationStage] = useState(0);
    const [expenseLineGraphData, setExpenseLineGraphData] =
        useState<LineGraphProps>();

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

                const graphData = prepareExpenseLineGraphData(
                    expenseData.data.expenses,
                );
                setExpenseLineGraphData(graphData);
            } catch (error) {
                console.error(error);
            } finally {
                setExpensesLoading(false);
            }
        };

        const fetchAllIncome = async () => {};

        fetchUser();
        fetchAllExpenses();
        console.log(expense);
    }, []);

    if (isExpensesLoading) {
        return (
            <Container>
                <CircularProgress size="lg" />
            </Container>
        );
    }

    return (
        <TranslucentBody>
            <DashboardHeader />
            <Container>
                <TranslucentTile>
                    <FinancialInfo
                        currentBalance={5000}
                        expensesThisMonth={expense?.[0]?.amount || 0}
                        recurringExpenses={expense?.[1]?.amount || 0}
                        budget={4000}
                        monthlyGoal={3500}
                    />
                </TranslucentTile>
                <TranslucentTile>
                    <FinancialInfo
                        currentBalance={5000}
                        expensesThisMonth={expense?.[0]?.amount || 0}
                        recurringExpenses={expense?.[1]?.amount || 0}
                        budget={4000}
                        monthlyGoal={3500}
                    />
                </TranslucentTile>
                <TranslucentTile>
                    <FinancialInfo
                        currentBalance={5000}
                        expensesThisMonth={expense?.[0]?.amount || 0}
                        recurringExpenses={expense?.[1]?.amount || 0}
                        budget={4000}
                        monthlyGoal={3500}
                    />
                </TranslucentTile>
                <TranslucentTile>
                    <FinancialInfo
                        currentBalance={5000}
                        expensesThisMonth={expense?.[0]?.amount || 0}
                        recurringExpenses={expense?.[1]?.amount || 0}
                        budget={4000}
                        monthlyGoal={3500}
                    />
                </TranslucentTile>
                <TranslucentTile>
                    <h2>Expenses Over Time</h2>
                    {expenseLineGraphData?.data ? (
                        <LineGraph data={expenseLineGraphData.data} />
                    ) : (
                        <CircularProgress size="sm" />
                    )}
                </TranslucentTile>
            </Container>
        </TranslucentBody>
    );
};

export default DashboardComponent;
