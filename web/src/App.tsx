import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './pages/login/login';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <LoginComponent />
            </header>
        </div>
    );
}

export default App;
