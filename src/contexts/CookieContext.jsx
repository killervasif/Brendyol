import React, { createContext, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';

const CookieContext = createContext();

export const useCookieContext = () => useContext(CookieContext);

export const CookieProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
    
    return (
        <CookieContext.Provider value={{ cookies, setCookie, removeCookie }}>
            {children}
        </CookieContext.Provider>
    );
};