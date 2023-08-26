import { Document } from "mongoose";

export enum IncomeSource {
	SALARY = "Salary",
	INVESTMENTS = "Investments",
	OTHER = "Other",
}

export interface IIncome extends Document {
	source: IncomeSource;
	amount: number;
	date: Date;
}
