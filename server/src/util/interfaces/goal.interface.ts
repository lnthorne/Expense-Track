import { Document, Types } from 'mongoose';

export interface IGoal extends Document {
    userId: Types.ObjectId;
    _id: Types.ObjectId;
    title: string;
    description: string;
    amount: number;
    startDate: Date;
    endDate: Date;
    progress: number;
}
