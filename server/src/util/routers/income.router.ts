import express from 'express';
import { IncomeController } from '../../controllers/income.controller';

const IncomeService: IncomeController = new IncomeController();
const IncomeRouter = express.Router();

IncomeRouter.get('/', IncomeService.GetAllIncome);

IncomeRouter.get('/:id', IncomeService.GetIncomeById);

IncomeRouter.put('/', IncomeService.CreateIncome);

export default IncomeRouter;
