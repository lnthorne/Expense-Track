import { Document, Types } from 'mongoose';
import { ISettings } from './settings.interface';

export interface IUser extends Document {
    _id: Types.ObjectId;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    profileImage?: string;
    settings: ISettings;
}

export interface IUserLoginPayload {
    username: string;
    password: string;
}
