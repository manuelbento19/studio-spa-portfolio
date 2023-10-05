import { createContext,useContext,useState } from "react";

const AppContext = createContext({
    mobileMenu: false,
    setActiveMobile: (state)=> {}
})

export const AppContextProvider = ({children}) => {
    const [mobileMenu,setActiveMobile] = useState(false);
    return(
        <AppContext.Provider value={{
            mobileMenu,
            setActiveMobile
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => useContext(AppContext);