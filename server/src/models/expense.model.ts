import mongoose, { Schema, Types } from 'mongoose';
import {
  ExpenseCategory,
  IExpense,
  IRecurringExpense,
  ISharedExpense,
  PaymentMethod,
  RecurringInterverval,
} from '../util/interfaces/expense.interface';

const ExpenseSchema = new Schema<IExpense>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  category: {
    type: String,
    enum: Object.values(ExpenseCategory),
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: Object.values(PaymentMethod),
    required: true,
  },
  notes: { type: String, required: false },
  attachments: { type: [String], required: false },
});

export const Expense = mongoose.model<IExpense>('Expense', ExpenseSchema);

const RecurringExpenseSchema = new Schema<IRecurringExpense>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  ammount: { type: Number, required: true },
  nextDueDate: { type: Date, required: true },
  recurringInterval: {
    Type: String,
    enum: Object.values(RecurringInterverval),
    required: true,
  },
  category: {
    type: String,
    enum: Object.values(ExpenseCategory),
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: Object.values(PaymentMethod),
    required: true,
  },
  notes: { type: String, required: false },
  attachments: { type: [String], required: false },
});

export const RecurringExpense = mongoose.model<IRecurringExpense>(
  'RecurringExpense',
  RecurringExpenseSchema,
);

const SharedExpenseSchema = new Schema<ISharedExpense>({
  participants: { type: [Types.ObjectId], required: true },
  description: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  settled: { type: Boolean, default: false },
});

export const SharedExpense = mongoose.model<ISharedExpense>(
  'SharedExpense',
  SharedExpenseSchema,
);
