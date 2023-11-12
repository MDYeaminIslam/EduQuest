import { getCurrentUser } from '@/lib/appwrite/api';
import { IUser } from '@/types';
import { useContext, createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const INITIAL_USER = {
  id: '',
  name: '',
  username: '',
  email: '',
  imageUrl: '',
  bio: '',
};

//To check if the user is Logged in all the time
const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

//creating IContextType 
type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

//AuthProvider :- This is the component that will wrap all the components that need to access the AuthContext. "children" is the components that will be wrapped by AuthProvider.
export function AuthProvider ({ children }: { children: React.ReactNode }){
  //How our user will look like
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  //Set loading to false by default
  const [isLoading, setIsLoading] = useState(false);
  //Set isAuthenticated to false by default
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate(); //useNavigate is a hook that we can use to navigate to a specific route

  //checkAuthUser :- This function will be used to check if the user is authenticated or not. This function will be called when the app is loaded.
  const checkAuthUser = async () => {
    try {
      const currentAccount = await getCurrentUser(); //Get the current user
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          username: currentAccount.username,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
          bio: currentAccount.bio,
        });

        setIsAuthenticated(true); //because we have a user
        return true; //because we have a user
      }
      return false; //because we don't have a user and this is outside the if statement
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  //we will call checkAuthUser when the app is reloaded and for that we will use useEffect
  useEffect(() => {
    if (
      localStorage.getItem('cookieFallback') === '[]' ||
      localStorage.getItem('cookieFallback') === null
    )
      navigate('/sign-in');

    checkAuthUser(); //call checkAuthUser when the app is reloaded.
  }, []);

  //value :- This is the object that will be passed as value to the AuthContext.Provider. This object contains all the values that we want to share with the components that will be wrapped by AuthProvider.
  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUserContext = () => useContext(AuthContext);
