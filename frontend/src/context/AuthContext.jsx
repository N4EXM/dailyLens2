import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const login = async (email, password) => {

    setIsLoading(true)

    try {
    const response = await fetch("http://localhost:3000/api/routes/userApi.php?action=login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json();
          
      if (data.success && data.user != null) {
          setError("")
          setUser(data.user); // sets the values of the user e.g their username 
          setIsAuthenticated(true); // 
          navigate("/");
          return true;
      }
      setError(data.message)
      return false;
    } 
    catch (error) {
      console.error('Login failed:', error);
      return false;
    } 
    finally {
      setIsLoading(false);
    }

  }

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/routes/userApi.php?action=logout', {
        credentials: 'include',
        headers: {
          "Content-type": "application/json"
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed")
      }

      const data = await response.json()

      if (data.success) {
        setUser(null);
        setIsAuthenticated(false);
        navigate('/login');
      }
      
    } 
    catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const checkAuth = async () => {

    try {

      const response = await fetch("http://localhost:3000/api/routes/userApi.php?action=check-auth", {

          credentials: "include"

      })

      if (!response.ok) {
          throw new Error("Auth check failed")
      }

      const data = await response.json()

      if (data.authenticated) {
          setUser(data.user)
          setIsAuthenticated(true)
      }

      console.log(data)

    }
    catch (error) {
        console.log("Auth check error: ", error)
    }
    finally {
        setIsLoading(false)
    }

    console.log("check auth function ran")

  }

  useEffect(() => {

    checkAuth()

  }, [])

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoading, 
      login, 
      logout,
      error
    }}>
      {children}
    </AuthContext.Provider>
  );

}

export const useAuth = () => useContext(AuthContext);