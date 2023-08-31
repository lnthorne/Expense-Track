import { Request, Response } from 'express';
import {
    Expense,
    RecurringExpense,
    SharedExpense,
} from '../models/expense.model';
import {
    IExpense,
    IRecurringExpense,
    ISharedExpense,
} from '../util/interfaces/expense.interface';

export class ExpenseController {
    public async GetAllUserExpenses(req: Request, res: Response) {
        const userId = (req as any).user.id;

        try {
            const expenses: IExpense[] = await Expense.find({ userId: userId });

            const recurringExpenses: IRecurringExpense[] =
                await RecurringExpense.find({
                    userId: userId,
                });

            const sharedExpenses: ISharedExpense[] = await SharedExpense.find({
                participants: userId,
            });

            const responseData = {
                expenses: expenses,
                recurringExpenses: recurringExpenses,
                sharedExpenses: sharedExpenses,
            };

            res.status(200).json(responseData);
        } catch (error) {
            console.error('Error fetching user expenses:', error);
            res.status(500).json({
                message: 'Error fetching user expenses.',
                error,
            });
        }
    }

    public async GetUserExpenses(req: Request, res: Response) {
        const userId = (req as any).user.id;

        try {
            const expenses: IExpense[] = await Expense.find({ userId: userId });

            res.status(200).json(expenses);
        } catch (error) {
            console.error('Error fetching user expenses:', error);
            res.status(500).json({
                message: 'Error fetching user expenses.',
                error,
            });
        }
    }

    public async GetUserRecurringExpenses(req: Request, res: Response) {
        const userId = (req as any).user.id;

        try {
            const recurringExpenses: IRecurringExpense[] =
                await RecurringExpense.find({
                    userId: userId,
                });

            res.status(200).json(recurringExpenses);
        } catch (error) {
            console.error('Error fetching user expenses:', error);
            res.status(500).json({
                message: 'Error fetching user expenses.',
                error,
            });
        }
    }

    public async GetUserSharedExpenses(req: Request, res: Response) {
        const userId = (req as any).user.id;

        try {
            const sharedExpenses: ISharedExpense[] = await SharedExpense.find({
                participants: userId,
            });

            res.status(200).json(sharedExpenses);
        } catch (error) {
            console.error('Error fetching user expenses:', error);
            res.status(500).json({
                message: 'Error fetching user expenses.',
                error,
            });
        }
    }

    public async UpdateUserExpenses(req: Request, res: Response) {
        try {
            const expense: IExpense | null = await Expense.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true },
            );

            if (!expense) {
                res.status(404).json({
                    message: 'Expense not found or not authorized',
                });
                return;
            }
            res.send(expense);
        } catch (error) {
            res.status(500).json({
                message: 'Error updating user expense:',
                error,
            });
        }
    }

    public async UpdateUserRecurringExpenses(req: Request, res: Response) {
        try {
            const recurringExpenses: IRecurringExpense | null =
                await RecurringExpense.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    { new: true, runValidators: true },
                );

            if (!recurringExpenses) {
                res.status(404).json({
                    message: 'Recurring expenses not found or not authorized',
                });
                return;
            }
            res.send(recurringExpenses);
        } catch (error) {
            res.status(500).json({
                message: 'error updating user recurring expenses',
                error,
            });
        }
    }

    public async UpdateUserSharedExpenses(req: Request, res: Response) {
        try {
            const sharedExpenses: ISharedExpense | null =
                await SharedExpense.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true,
                });

            if (!sharedExpenses) {
                res.status(404).json({
                    message: 'Shared expenses not found or not authorized',
                });
                return;
            }
            res.send(sharedExpenses);
        } catch (error) {
            res.status(500).json({
                message: 'error updating user shared expenses',
                error,
            });
        }
    }
}
