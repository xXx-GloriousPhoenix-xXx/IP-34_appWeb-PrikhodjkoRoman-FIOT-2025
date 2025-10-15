import './App.css';

import { HashRouter, Routes, Route, Navigate } from "react-router";

import Report from './pages/Report/Report';
import Landing from './pages/Landing/Landing';

function App() {
    return <div className="App">
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/report' replace/>} />
                <Route path="/report" element={<Report/>} />
                <Route path="/landing" element={<Landing/>} />
            </Routes>
        </HashRouter>
    </div>
}

export default App;
