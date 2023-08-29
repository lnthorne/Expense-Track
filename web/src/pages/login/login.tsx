// src/components/LoginComponent.tsx
import React, { useState } from 'react';
import { Login, Register } from '../../utils/auth';
import {
    Container,
    LoginBox,
    Title,
    Input,
    Button,
    ErrorMessage,
    ToggleText,
} from './login.styles';
import { IUserLoginPayload } from '@interfaces/users.interface';

const LoginComponent: React.FC = () => {
    const [state, setState] = useState<IUserLoginPayload>({
        username: ' ',
        password: ' ',
    });

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isRegistering, setIsRegistering] = useState(false); // to toggle between registration and login

    const handleSubmit = async () => {
        let response;
        if (isRegistering) {
            response = await Register(state);
        } else {
            response = await Login(state);
        }

        if (response.error) {
            setErrorMessage(
                isRegistering
                    ? 'Error registering. Try again.'
                    : 'Invalid username or password.',
            );
        } else {
            setErrorMessage(null);
            console.log(
                isRegistering
                    ? 'Registration successful!'
                    : 'Login successful!',
            );
        }
    };

    return (
        <Container>
            <LoginBox>
                <Title>Expense Tracker</Title>
                <Input
                    type="text"
                    placeholder="Username"
                    value={state.username}
                    onChange={(e) =>
                        setState({ ...state, username: e.target.value })
                    }
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={(e) =>
                        setState({ ...state, password: e.target.value })
                    }
                />
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <Button onClick={handleSubmit}>
                    {isRegistering ? 'Register' : 'Login'}
                </Button>
                <ToggleText>
                    {isRegistering
                        ? 'Already have an account?'
                        : "Don't have an account?"}
                    <span onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? 'Login' : 'Register'}
                    </span>
                </ToggleText>
            </LoginBox>
        </Container>
    );
};

export default LoginComponent;
