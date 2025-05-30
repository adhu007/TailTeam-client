import { createContext, useEffect, useState } from "react";
import { consultantsData } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(null);

    //console.log(user)
    useEffect(() => {
        if (token) {

            const payload = JSON.parse(atob(token.split('.')[1]));
            setUser({
                id: payload.customerId,
                name: payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] || '',
                roles: [payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]].filter(Boolean),
            });

        } else {
            setUser(null);
        }
    }, [token]);

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    function convertTo24Hour(time12h) {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');

        if (hours === '12') hours = '00';
        if (modifier.toUpperCase() === 'PM') hours = String(parseInt(hours, 10) + 12);

        return `${hours.padStart(2, '0')}:${minutes}:00`;
    }

    const currencySymbol = '₹'
    const value = {
        consultantsData, currencySymbol, token, setToken, user, login, logout,convertTo24Hour
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider