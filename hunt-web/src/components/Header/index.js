import React, { useContext } from 'react';

import './styles.css';
import { ResearchContext } from '../../Contexts/ResearchContext'


function Header() {
    const { handleResearch } = useContext(ResearchContext)

    function handleKeyWord(e) {
        const word = e.target.value;
        if(e.key === "Enter") {
            handleResearch(word)
        }
    }

    return (
        <header id="main-header">
            <article className="header-content">
                    <input onKeyDown={(e) => handleKeyWord(e)}/>
                <h4>JSHunt</h4>
            </article>
        </header>
    )
}

export default Header;