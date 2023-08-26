import { Document, Types } from 'mongoose';
import { ExpenseCategory } from './expense.interface';

export interface IBudget extends Document {
  userId: Types.ObjectId;
  startDate: Date;
  endDate: Date;
  category: ExpenseCategory;
  amount: number;
}
