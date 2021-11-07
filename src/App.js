import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Theme';
import Header from './components/Header'
import Search from "./components/Search";
import UserInformation from "./components/UserInformation";

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
					<Header themeToggler={themeToggler}/>
					<Search/>
					<UserInformation/>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
