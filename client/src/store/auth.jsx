import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const[isLoading,setIsLoading]=useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token; // Efficient check

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  //JWT AUTHENTICATION-to get the currently logged in user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization:authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.error("Error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  const [user, setUser] = useState("");
 
  const [services, setServices] = useState([]);
  const authorizationToken =`Bearer ${token}`;
  //to fetch services data from database

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`Services frontend error:${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, [token]); // Re-fetch user data on token change

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services,authorizationToken,isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return authContextValue;
};
