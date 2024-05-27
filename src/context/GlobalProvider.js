"use client"

import { createClient } from "@/lib/supabase/client";
import { useContext, createContext, useState, ReactNode, useEffect } from "react";

export const GlobalContext = createContext({
    isLogged: false,
    setIsLogged: (value) => {},
    session: null,
    setSession: (value) => {},
    openSidebar: false,
    setOpenSidebar: (value) => {},
});

export const useGlobalContext = () => useContext(GlobalContext);


const GlobalProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false);
    const [session, setSession] = useState(null);
    const [openSidebar, setOpenSidebar] = useState(false);

    useEffect(() => {
        const { data } = createClient().auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_IN") {
                setIsLogged(true);
                setSession(session);
            }
            if (event === "SIGNED_OUT") {
                setIsLogged(false);
                setSession(null);
                console.log("signed out", session);

                [
                    window.localStorage,
                    window.sessionStorage,
                ].forEach((storage) => {
                    Object.entries(storage)
                      .forEach(([key]) => {
                        storage.removeItem(key)
                      })
                })
            }
        });

        return () => {
            data.subscription.unsubscribe();
        }
    }, [])

    return (
        <GlobalContext.Provider value={{isLogged, setIsLogged, session, setSession, openSidebar, setOpenSidebar}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;