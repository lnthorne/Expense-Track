import axios, { Method } from 'axios';

const baseURL = 'http://localhost:3000';

export enum Endpoint {
    LOGIN = '/auth/login',
    LOGOUT = '/auth/logout',
    REGISTER = '/auth/register',
    USER = '/user/',
}

interface APICallProps {
    endpoint: Endpoint;
    method?: Method; // axios has its own type for HTTP methods
    data?: any;
    params?: Record<string, any>;
}

interface APIError {
    response?: {
        data?: any;
    };
    message?: string;
}

export async function CallAPI({
    endpoint,
    method = 'GET',
    data = {},
    params = {},
}: APICallProps) {
    const token = localStorage.getItem('jwtToken');

    try {
        const response = await axios({
            baseURL,
            url: endpoint,
            method,
            data,
            params,
            headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        });
        return { data: response.data, error: null };
    } catch (error) {
        const apiError = error as APIError;
        console.error('Error calling API', apiError.response);
        return {
            data: null,
            error: apiError.response?.data || apiError.message,
        };
    }
}
