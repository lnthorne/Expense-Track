import mongoose, { Schema } from "mongoose";
import { ExpenseCategory } from "../util/expense.interface";
import { IncomeSource } from "../util/income.interface";

const UserSchema: Schema = new Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	expenses: [
		{
			description: { type: String, required: true },
			amount: { type: Number, required: true },
			date: { type: Date, default: Date.now },
			category: { type: String, enum: Object.values(ExpenseCategory), required: true },
		},
	],
	income: [
		{
			source: { type: String, enum: Object.values(IncomeSource), required: true },
			amount: { type: Number, required: true },
			date: { type: Date, default: Date.now },
		},
	],
});

export const User = mongoose.model("User", UserSchema);
