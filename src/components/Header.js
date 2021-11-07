import React from 'react';
import styled from 'styled-components'

function Header({themeToggler}) {
    return (
        <header>
			<h1>devfinder</h1>
			<button onClick={() => themeToggler()}>Darkmode</button>
		</header>
    );
}

export default Header;