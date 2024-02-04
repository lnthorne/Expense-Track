import { CallAPI, Endpoint } from './endpoints';
import { IIncome } from '@interfaces/income.interface';

export async function NewIncome(data: IIncome) {
    const income = await CallAPI({
        endpoint: Endpoint.INCOME,
        method: 'PUT',
        data: data,
    });

    return income;
}

export async function GetAllIncome() {
    const income = await CallAPI({
        endpoint: Endpoint.INCOME,
        method: 'GET',
    });

    return income;
}

export async function GetIncomeById(data: IIncome) {
    const income = await CallAPI({
        endpoint: Endpoint.INCOME,
        method: 'GET',
        params: {
            id: data.id,
        },
    });

    return income;
}
