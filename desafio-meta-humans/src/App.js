import logo from './logo.svg';
import './App.css';
import Listagem from './pages/meta-humans/listagem';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize your primary color
    },
    secondary: {
      main: '#dc004e', // Customize your secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Customize your fonts
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Listagem />
    </ThemeProvider>
  );
}

export default App;
