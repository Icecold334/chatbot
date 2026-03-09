import { createContext, useContext, useState } from "react";

interface MainContextType {
    color: string,
    setColor: (color: string) => void
}

const MainContext = createContext<MainContextType>({
    color: "primary-100",
    setColor: () => { }
})

export default function MainLayout({ children }: any) {
    const [color, setColor] = useState("primary-100")

    return (
        <MainContext.Provider value={{ color, setColor }}>

        </MainContext.Provider>
    )
}

export const useMainLayout = () => {
    return useContext(MainContext)
}