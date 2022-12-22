import { createContext, useState } from "react";

export const  storeContext = createContext();

export const StoreProvider = ({children}) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [myEvents, setMyEvents] = useState([]);

    const storeEvents = (events) => {
        setEvents(events);
    }


    return (
        <storeContext.Provider value={{events, storeEvents, loading, token , user, myEvents}}>
            {children}
        </storeContext.Provider>
    )
}
