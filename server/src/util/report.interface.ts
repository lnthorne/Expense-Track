import { Document, Types } from "mongoose";
import { IExpense, IRecurringExpense } from "./expense.interface";

export interface IReport extends Document {
	userId: Types.ObjectId;
	startDate: Date;
	endDate: Date;
	totalExpenses: number;
	totalIncome: number;
	netSavings: number;
	categoryBreakdown: {
		expense: IExpense | IRecurringExpense;
	}[];
}
