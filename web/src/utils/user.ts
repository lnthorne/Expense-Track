import { CallAPI, Endpoint } from './endpoints';

export async function GetCurrentUser() {
    const response = await CallAPI({
        endpoint: Endpoint.USER,
        method: 'GET',
    });

    return response;
}

// The server is returning teh current user based off of the token we gave it
// We shoudl not be returning the password of the user
