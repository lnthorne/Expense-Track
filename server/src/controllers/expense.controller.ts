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
    public async CreateExpense(req: Request, res: Response) {
        const expenseData = req.body;
        const userId = (req as any).user.id;
        try {
            const newExpense: IExpense = new Expense({
                ...expenseData,
                userId: userId,
            });
            await newExpense.save();

            res.status(201).json({
                message: 'Expense created successfully',
                expense: newExpense,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error creating expense',
                error: error,
            });
        }
    }

    public async CreateSharedExpense(req: Request, res: Response) {
        const expenseData = req.body;
        const userId = (req as any).user.id;

        try {
            const newSharedExpense: ISharedExpense = new SharedExpense({
                ...expenseData,
                userId: userId,
            });
            await newSharedExpense.save();

            res.status(201).json({
                message: 'Expense created successfully',
                expense: newSharedExpense,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error creating shared expense',
                error: error,
            });
        }
    }

    public async CreateRecurringExpense(req: Request, res: Response) {
        const expenseData = req.body;
        const userId = (req as any).user.id;

        try {
            const newRecurringExpense: IRecurringExpense = new RecurringExpense(
                {
                    ...expenseData,
                    userId: userId,
                },
            );
            await newRecurringExpense.save();

            res.status(201).json({
                message: 'Expense created successfully',
                expense: newRecurringExpense,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error creating recurring expense',
                error: error,
            });
        }
    }

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
    public async DeleteUserExpenses(req: Request, res: Response) {
        try {
            const expense: IExpense | null = await Expense.findByIdAndDelete(
                req.params.id,
            );

            if (!expense) {
                res.status(404).json({
                    message: 'Expense not found or not authorized',
                });
                return;
            }
            res.send(expense);
        } catch (error) {
            res.status(500).json({ message: 'Error deleting expense', error });
        }
    }

    public async DeleteUserRecurringExpense(req: Request, res: Response) {
        try {
            const expense: IRecurringExpense | null =
                await RecurringExpense.findByIdAndDelete(req.params.id);

            if (!expense) {
                res.status(404).json({
                    message: 'Recurring expense not found or not authorized',
                });
                return;
            }
            res.send(expense);
        } catch (error) {
            res.status(500).json({
                message: 'Error deleting recurring expense',
                error,
            });
        }
    }
    public async DeleteUserSharedExpenses(req: Request, res: Response) {
        try {
            const expense: ISharedExpense | null =
                await SharedExpense.findByIdAndDelete(req.params.id);

            if (!expense) {
                res.status(404).json({
                    message: 'Shared expenses not found or not authorized',
                });
                return;
            }
            res.send(expense);
        } catch (error) {
            res.status(500).json({
                message: 'Error deleting shared expense',
                error,
            });
        }
    }
}
