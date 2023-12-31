import { Document, Types } from 'mongoose';

export enum IncomeSource {
    SALARY = 'Salary',
    INVESTMENTS = 'Investments',
    OTHER = 'Other',
}

export interface IIncome extends Document {
    _id: Types.ObjectId;
    source: IncomeSource;
    amount: number;
    date: Date;
    userId: Types.ObjectId;
    attachments: string[];
    notes: string;
}
