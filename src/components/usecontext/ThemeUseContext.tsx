import React, {createContext,useContext,useState,ReactNode} from "react";

type ThemeContextType = {
    theme: "light" | "dark",
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType|undefined>(undefined);

type ThemeProviderPropsType = {
    children: ReactNode
}


const ThemeProvider : React.FC<ThemeProviderPropsType>  = ({ children }) => {

    const [theme, setTheme] = useState<"light" | "dark">("light");
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = ():ThemeContextType => {
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error("useTheme must be used with a ThemeProvider")
    }

    return context;
}

const ThemeToggler : React.FC = () => {
    const {theme , toggleTheme} = useTheme();
    return (
        <div style={{ padding: "20px", backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
            <p>The current theme is <strong>{theme}</strong>.</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      );
}


const ThemeUseContext : React.FC = () =>{
    return (
        <ThemeProvider>
          <ThemeToggler />
        </ThemeProvider>
      );
}
export default ThemeUseContext;
