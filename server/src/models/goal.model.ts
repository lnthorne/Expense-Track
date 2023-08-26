import mongoose, { Schema } from "mongoose";
import { IGoal } from "../util/goal.interface"; // Make sure to replace with the actual path to your IGoal interface file.

const GoalSchema = new Schema<IGoal>({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
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
	progress: {
		type: Number,
		required: true,
		default: 0,
	},
});

export const Goal = mongoose.model<IGoal>("Goal", GoalSchema);
