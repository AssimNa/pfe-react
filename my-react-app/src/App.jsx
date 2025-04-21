import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import DashboardLayout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp'; 
import DashboardPage from './pages/Dashboard';
import AnalyticsPage from './pages/Analytics';
import SettingsPage from './pages/Settings';
import TeamPage from './pages/Team';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6366F1', // Indigo
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#EC4899', // Pink
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    button: {
      fontWeight: 600,
    },
  },
});

const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          {/* Protected routes */}
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated()} />}>
            <Route element={<DashboardLayout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="analytics" element={<AnalyticsPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Route>
          
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;