import { useContext, createContext, useEffect, useState } from 'react';

export const INITIAL_USER = {
  id: '',
  name: '',
  username: '',
  email: '',
  imageUrl: '',
  bio: ''
}

//To check if the user is Logged in all the time
const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,

}

const AuthContext = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext