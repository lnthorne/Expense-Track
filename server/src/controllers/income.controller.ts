import { Request, Response } from 'express';
import { IIncome } from '../util/interfaces/income.interface';
import { Income } from '../models/income.model';

export class IncomeController {
    public async CreateIncome(req: Request, res: Response): Promise<void> {
        const userId = (req as any).user.id;
        const incomeData = req.body;

        try {
            const newIncome: IIncome = new Income({
                ...incomeData,
                userId: userId,
            });

            await newIncome.save();

            res.status(201).json({
                message: 'Income saved successfully',
                income: newIncome,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error saving income',
                error: error,
            });
        }
    }

    public async GetAllIncome(req: Request, res: Response): Promise<void> {
        const userId = (req as any).user.id;

        try {
            const income: IIncome[] = await Income.find({ userId: userId });

            res.status(200).json(income);
        } catch (error) {
            console.error('Failer to fetch the users income');

            res.status(500).json({
                message: 'Error fetching user income',
                error: error,
            });
        }
    }

    public async GetIncomeById(req: Request, res: Response): Promise<void> {
        const incomeId = req.params.id;

        try {
            const income: IIncome | null = await Income.findById(incomeId);

            if (!income) {
                res.status(404).json({
                    message: 'No income found or not authorized',
                });
                return;
            }

            res.send(income);
        } catch (error) {
            res.status(500).json({
                message: 'Error fetching income',
                error: error,
            });
        }
    }
}
