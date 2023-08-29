import { CallAPI, Endpoint } from './endpoints';
import { IUser, IUserLoginPayload } from '@interfaces/users.interface';

export async function Register(userData: IUserLoginPayload) {
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

export async function Login(userData: IUserLoginPayload) {
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
