import { Document } from "mongoose";
import { IExpense } from "./expense.interface";
import { IIncome } from "./income.interface";

export interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	expenses: IExpense[];
	income: IIncome[];
}
