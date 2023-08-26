import { Document } from "mongoose";

export enum CurrencyType {
	CAD = "CAD",
	USD = "USD",
}
export interface ICurrency extends Document {
	name: CurrencyType;
	symbol: string;
	conversionRateToDefault: number;
}
