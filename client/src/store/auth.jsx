import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");


    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;
    console.log("token", token);
    console.log("isLoggedIn", isLoggedIn);
    //logout functionality

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");

    };

    //*JWT AUTHENTICATION - to get currently logged in user data

     const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, []);


    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
};