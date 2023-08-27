import { Document, Types } from 'mongoose';

export enum ExpenseCategory {
    FOOD = 'Food',
    TRAVEL = 'Travel',
    UTILITIES = 'Utilities',
    SCHOOL = 'School',
    ENTERTAINMENT = 'Entertainment',
    HEALTH = 'Health',
    SAWYER = 'Girl Friend',
    OTHER = 'Other',
}

export enum PaymentMethod {
    DEBIT = 'Debit',
    CREDIT = 'Credit',
    CASH = 'Cash',
    OTHER = 'Other',
}

export enum RecurringInterverval {
    DAILY = 'Daily',
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly',
    QUARTERLY = 'Quarterly',
    YEARLY = 'Yearly',
}

export interface IExpense extends Document {
    userId: Types.ObjectId;
    expenseId: Types.ObjectId;
    category: ExpenseCategory;
    amount: number;
    date: Date;
    description: string;
    paymentMethod: PaymentMethod;
    notes: string;
    attachments: string[];
}

export interface IRecurringExpense extends Document {
    userId: Types.ObjectId;
    recurringInterval: RecurringInterverval;
    nextDueDate: Date;
    category: ExpenseCategory;
    ammount: number;
    paymentMethod: PaymentMethod;
    notes: string;
    attachments: string[];
}

export interface ISharedExpense extends Document {
    participants: Types.ObjectId[];
    description: string;
    totalAmount: number;
    date: Date;
    settled: boolean;
}
