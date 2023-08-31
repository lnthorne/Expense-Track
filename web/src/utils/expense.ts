import {
    IExpense,
    IRecurringExpense,
    ISharedExpense,
} from '@interfaces/expense.interface';
import { CallAPI, Endpoint } from './endpoints';

export async function GetExpenseData(
    endpoint:
        | Endpoint.ALL_EXPENSES
        | Endpoint.EXPENSES
        | Endpoint.RECURRING_EXPENSES
        | Endpoint.SHARED_EXPENSES,
) {
    const response = await CallAPI({
        endpoint: endpoint,
        method: 'GET',
    });

    return response;
}

export async function UpdateExpenseData(
    expense: IExpense | IRecurringExpense | ISharedExpense,
    endpoint:
        | Endpoint.ALL_EXPENSES
        | Endpoint.EXPENSES
        | Endpoint.RECURRING_EXPENSES
        | Endpoint.SHARED_EXPENSES,
) {
    const response = await CallAPI({
        endpoint: endpoint,
        method: 'POST',
        data: expense,
        params: {
            id: expense._id,
        },
    });

    return response;
}

export async function DeleteExpenseData(
    expense: IExpense | IRecurringExpense | ISharedExpense,
    endpoint:
        | Endpoint.ALL_EXPENSES
        | Endpoint.EXPENSES
        | Endpoint.RECURRING_EXPENSES
        | Endpoint.SHARED_EXPENSES,
) {
    const response = await CallAPI({
        endpoint: endpoint,
        method: 'DELETE',
        params: {
            id: expense._id,
        },
    });

    return response;
}
