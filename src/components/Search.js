import React from 'react';

function Search(props) {
    return (
        <section>
            <input type="text" id="search" placeholder="Search GitHub username..."/>
            <button>Search</button>
        </section>
    );
}

export default Search;