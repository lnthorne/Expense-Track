import mongoose, { Schema, Types, model } from 'mongoose';
import { IIncome, IncomeSource } from '../util/interfaces/income.interface';

const IncomeSchema = new Schema<IIncome>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  source: { type: String, enum: Object.values(IncomeSource), required: true },
  date: { type: Date, default: Date.now() },
  attachments: { type: [String], required: false },
  notes: { type: String, required: false },
});

export const Income = mongoose.model<IIncome>('Income', IncomeSchema);
