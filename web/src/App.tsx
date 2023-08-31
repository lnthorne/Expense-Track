import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardComponent from './pages/dashboard/dashboard';
import LoginComponent from './pages/login/login';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/dashboard" element={<DashboardComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
