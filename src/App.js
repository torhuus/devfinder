import {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './components/globalStyles';
import {lightTheme, darkTheme} from './components/Theme';
import Header from './components/Header'
import Search from "./components/Search";
import UserInformation from "./components/UserInformation";
import styled from 'styled-components'
import {useDebounce} from "./util/useDebounce";

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 100px;

  @media screen and (max-width: 600px) {
    padding: 30px 24px;
  }
`

function App() {
    const [theme, setTheme] = useState('light');
    const [userData, setUserData] = useState({});
    const [isSearching, setIsSearching] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const debouncedSearchTerm = useDebounce(searchInput, 500);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'https://api.github.com/users/torhuus', {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json',
                        'Authorization': process.env.GITHUB_API_TOKEN,
                    }
                }
            );
            const json = await res.json();
            setUserData(json);
        };
        fetchData();
    },[]);

    console.log(userData)


    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <AppWrapper className="App">
                    <Header themeToggler={themeToggler} currentTheme={theme}/>
                    <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
                    {userData === {} ? "Loading.." : <UserInformation user={userData}/>}
                </AppWrapper>
            </ThemeProvider>
        </>
    );
}

export default App;
