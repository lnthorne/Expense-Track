import { Document } from "mongoose";

export enum ExpenseCategory {
	FOOD = "Food",
	TRAVEL = "Travel",
	UTILITIES = "Utilities",
	SCHOOL = "School",
	ENTERTAINMENT = "Entertainment",
	HEALTH = "Health",
	SAWYER = "Girl Friend",
	OTHER = "Other",
}

export interface IExpense extends Document {
	category: ExpenseCategory;
	amount: number;
	date: Date;
	description: string;
}
