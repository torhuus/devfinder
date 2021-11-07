import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './components/globalStyles';
import {lightTheme, darkTheme} from './components/Theme';
import Header from './components/Header'
import Search from "./components/Search";
import UserInformation from "./components/UserInformation";
import styled from 'styled-components'

const AppWrapper = styled.div`
  min-height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
  
  @media screen and (max-width:600px){
    padding: 30px 24px;
  }
`

function App() {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <AppWrapper className="App">
                    <Header themeToggler={themeToggler} currentTheme={theme}/>
                    <Search/>
                    <UserInformation/>
                </AppWrapper>
            </ThemeProvider>
        </>
    );
}

export default App;
