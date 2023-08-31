import express from 'express';
import { ExpenseController } from '../../controllers/expense.controller';

const ExpenseService: ExpenseController = new ExpenseController();
const FinancialInfoRouter = express.Router();

FinancialInfoRouter.get('/', ExpenseService.GetAllUserExpenses);

FinancialInfoRouter.get('/expense/', ExpenseService.GetUserExpenses);

FinancialInfoRouter.get('/shared/', ExpenseService.GetUserSharedExpenses);

FinancialInfoRouter.get('/recurring/', ExpenseService.GetUserRecurringExpenses);

FinancialInfoRouter.post('/expense/:id', ExpenseService.UpdateUserExpenses);

FinancialInfoRouter.post(
    '/shared/:id',
    ExpenseService.UpdateUserSharedExpenses,
);

FinancialInfoRouter.post(
    '/recurring/:id',
    ExpenseService.UpdateUserRecurringExpenses,
);

FinancialInfoRouter.put('/expense/', ExpenseService.CreateExpense);

FinancialInfoRouter.put('/shared/', ExpenseService.CreateSharedExpense);

FinancialInfoRouter.put('/recurring/', ExpenseService.CreateRecurringExpense);

FinancialInfoRouter.delete('/expense/:id', ExpenseService.DeleteUserExpenses);

FinancialInfoRouter.delete(
    '/shared/:id',
    ExpenseService.DeleteUserSharedExpenses,
);

FinancialInfoRouter.delete(
    '/recurring/:id',
    ExpenseService.DeleteUserRecurringExpense,
);

export default FinancialInfoRouter;
