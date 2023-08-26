import mongoose, { Schema } from "mongoose";
import { IBudget } from "../util/Budget.interface";

const BudgetSchema = new Schema<IBudget>({
	userId: { type: Schema.Types.ObjectId, required: true },
	startDate: { type: Date, default: Date.now() },
	endDate: { type: Date, required: true },
	amount: { type: Number, required: true },
});

export const Budget = mongoose.model<IBudget>("Budget", BudgetSchema);
