import express from 'express';
import connectDB from './database';
import 'dotenv/config';
import UserRouter from './util/routers/user.router';
import AuthRouter from './util/routers/auth.router';
import FinancialInfoRouter from './util/routers/expense.router';
import IncomeRouter from './util/routers/income.router';
import verifyToken from './util/auth';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cors());
app.use('/user', verifyToken, UserRouter);
app.use('/financial', verifyToken, FinancialInfoRouter);
app.use('/income', verifyToken, IncomeRouter);
app.use('/auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
