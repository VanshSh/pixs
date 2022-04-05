import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../components/firebase'
import { useNavigate } from 'react-router-dom'

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null)
 const [loading, setLoading] = useState(true)
 const navigate = useNavigate()

 useEffect(() => {
  auth.onAuthStateChanged((user) => {
   setUser(user)
   setLoading(false)
   if (user) {
    navigate('/chats')
   }
  })
 }, [user, navigate])

 const value = { user }

 return (
  <AuthContext.Provider value={value}>
   {!loading && children}
  </AuthContext.Provider>
 )
}