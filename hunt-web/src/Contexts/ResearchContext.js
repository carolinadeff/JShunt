import React, { createContext, useState } from 'react';

const ResearchContext = createContext();

function ResearchProvider({ children }) {
    const [research, setResearch] = useState();

    function handleResearch(word) {
        setResearch(word)
    }

    return (
        <ResearchContext.Provider value={{ handleResearch, research }}>
            {children}
        </ResearchContext.Provider>
    )
}

export { ResearchContext, ResearchProvider }