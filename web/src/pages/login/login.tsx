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
import { IUser } from '@interfaces/users.interface';
import { useNavigate } from 'react-router-dom';

interface IUserState extends Partial<IUser> {
    confirmPassword?: string;
}

const LoginComponent: React.FC = () => {
    const initialState: IUserState = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
    };

    const [state, setState] = useState<IUserState>(initialState);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isRegistering, setIsRegistering] = useState(false);
    const navigation = useNavigate();

    const handleSubmit = async () => {
        let response;
        if (isRegistering) {
            if (state.password !== state.confirmPassword) {
                setErrorMessage('Passwords do not match');
                return;
            }

            const registerData = {
                username: state.username,
                password: state.password,
                email: state.email,
                firstName: state.firstName,
                lastName: state.lastName,
            };
            response = await Register(registerData as IUser);
        } else {
            response = await Login({
                username: state.username!,
                password: state.password!,
            });
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
            navigation('/dashboard');
        }
    };

    return (
        <Container>
            <LoginBox>
                <Title>Expense Tracker</Title>

                {isRegistering && (
                    <>
                        <Input
                            type="text"
                            placeholder="First Name"
                            value={state.firstName || ''}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    firstName: e.target.value,
                                })
                            }
                        />
                        <Input
                            type="text"
                            placeholder="Last Name"
                            value={state.lastName || ''}
                            onChange={(e) =>
                                setState({ ...state, lastName: e.target.value })
                            }
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            value={state.email || ''}
                            onChange={(e) =>
                                setState({ ...state, email: e.target.value })
                            }
                        />
                    </>
                )}

                <Input
                    type="text"
                    placeholder="Username"
                    value={state.username || ''}
                    onChange={(e) =>
                        setState({ ...state, username: e.target.value })
                    }
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={state.password || ''}
                    onChange={(e) =>
                        setState({ ...state, password: e.target.value })
                    }
                />

                {isRegistering && (
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={state.confirmPassword || ''}
                        onChange={(e) =>
                            setState({
                                ...state,
                                confirmPassword: e.target.value,
                            })
                        }
                    />
                )}

                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <Button onClick={handleSubmit}>
                    {isRegistering ? 'Register' : 'Login'}
                </Button>

                <ToggleText>
                    {isRegistering
                        ? 'Already have an account?'
                        : "Don't have an account?"}
                    <span
                        className="link"
                        onClick={() => setIsRegistering(!isRegistering)}
                    >
                        {isRegistering ? 'Login' : 'Register'}
                    </span>
                </ToggleText>
            </LoginBox>
        </Container>
    );
};

export default LoginComponent;
