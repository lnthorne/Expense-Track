import mongoose, { Schema } from "mongoose";
import { IReport } from "../util/report.interface"; // Replace with the actual path to your IReport interface file.

// Define a sub-document schema for categoryBreakdown
const CategoryBreakdownSchema = new Schema({
	expense: {
		type: Schema.Types.Mixed, // Since this can be IExpense or IRecurringExpense
		required: true,
	},
});

const ReportSchema = new Schema<IReport>({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
		required: true,
	},
	totalExpenses: {
		type: Number,
		required: true,
	},
	totalIncome: {
		type: Number,
		required: true,
	},
	netSavings: {
		type: Number,
		required: true,
	},
	categoryBreakdown: [CategoryBreakdownSchema], // Use the sub-document schema
});

export const Report = mongoose.model<IReport>("Report", ReportSchema);
