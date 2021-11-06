import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Theme';


function App() {
	const [theme, setTheme] = useState('light');

	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	}

	return (
		<>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				<GlobalStyles />
				<div className="App">
					<button onClick={() => themeToggler()}>Change me</button>
					<h1>Welcome to GitHub API-based developer finder</h1>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
