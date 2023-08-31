import express from 'express';
import { ExpenseController } from '../../controllers/financialInfo.controller';

const ExpenseService: ExpenseController = new ExpenseController();
const FinancialInfoRouter = express.Router();

FinancialInfoRouter.get('/', ExpenseService.GetAllUserExpenses);

FinancialInfoRouter.get('/expense', ExpenseService.GetUserExpenses);

FinancialInfoRouter.get('/shared', ExpenseService.GetUserSharedExpenses);

FinancialInfoRouter.get('/recurring', ExpenseService.GetUserRecurringExpenses);

FinancialInfoRouter.put('/expense');

FinancialInfoRouter.put('/shared');

FinancialInfoRouter.put('/recurring');

export default FinancialInfoRouter;
