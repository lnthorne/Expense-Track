import express from 'express';
import { ExpenseController } from '../../controllers/financialInfo.controller';

const ExpenseService: ExpenseController = new ExpenseController();
const FinancialInfoRouter = express.Router();

FinancialInfoRouter.get('/', ExpenseService.GetAllUserExpenses);

FinancialInfoRouter.get('/expense', ExpenseService.GetUserExpenses);

FinancialInfoRouter.get('/shared', ExpenseService.GetUserSharedExpenses);

FinancialInfoRouter.get('/recurring', ExpenseService.GetUserRecurringExpenses);

FinancialInfoRouter.put('/expense/:id', ExpenseService.UpdateUserExpenses);

FinancialInfoRouter.put('/shared/:id', ExpenseService.UpdateUserSharedExpenses);

FinancialInfoRouter.put(
    '/recurring/:id',
    ExpenseService.UpdateUserRecurringExpenses,
);

export default FinancialInfoRouter;
