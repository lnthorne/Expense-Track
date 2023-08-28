import { CallAPI, Endpoint } from './endpoints';
import { IUser } from '@interfaces/users.interface';

export async function Register(userData: IUser) {
    const response = await CallAPI({
        endpoint: Endpoint.REGISTER,
        method: 'POST',
        data: userData,
    });

    if (response.data && response.data.token) {
        localStorage.setItem('jwtToken', response.data.token);
    }

    return response;
}

export async function Login(userData: IUser) {
    const response = await CallAPI({
        endpoint: Endpoint.LOGIN,
        method: 'POST',
        data: userData,
    });

    if (response.data && response.data.token) {
        localStorage.setItem('jwtToken', response.data.token);
    }

    return response;
}

export async function Logout() {
    const response = await CallAPI({
        endpoint: Endpoint.LOGOUT,
        method: 'POST',
    });

    localStorage.removeItem('jwtToken');

    return response;
}
