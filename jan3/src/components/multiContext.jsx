import React, { useState, useEffect, createContext, useContext } from 'react'
// import PageContextProvider from './PageContextProvider';
// import Header from './Header';

function MultiContext() {
    return (
        <div>
            <PageContextProvider>
                <Header />
            </PageContextProvider>
        </div>
    )
}

const PageContext = createContext();
const PageContextProvider = (props) => {
    const [user, setUser] = useState({
        'name': 'harry potter'
    });
    return (
        <PageContext.Provider value={{ 
            user: user,
        }}>
        	{props.children}
        </PageContext.Provider>
    );
}


const Header = () => {
    const { user } = useContext(PageContext);
    return (
        <div className="header">
        	{user.name}
        </div>
    );
}

export default MultiContext
