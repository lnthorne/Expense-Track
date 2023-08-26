import mongoose, { Schema } from 'mongoose';
import { CurrencyType, ICurrency } from '../util/interfaces/currency.interface';

const CurrencySchema = new Schema<ICurrency>({
  name: {
    type: String,
    enum: Object.values(CurrencyType),
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  conversionRateToDefault: {
    type: Number,
    required: true,
  },
});

export const Currency = mongoose.model<ICurrency>('Currency', CurrencySchema);
