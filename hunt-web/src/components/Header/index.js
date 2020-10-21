import React, {useState} from 'react';

import './styles.css';

function Header() {
    // eslint-disable-next-line
    const [search, setSearch] = useState('');

    function handlePesquisa(e) {
        const pesquisa = e.target.value;
        if(e.key === "Enter") {
            setSearch(pesquisa)
        }
    }

    return (
        <header id="main-header">
            <article className="header-content">
                    <input onKeyDown={(e) => handlePesquisa(e)}/>
                <h4>JSHunt</h4>
            </article>
        </header>
    )
}

export default Header;