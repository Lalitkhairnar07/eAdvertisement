import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { UserSidebar } from './components/layouts/UserSidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { UserProfile } from './components/user/UserProfile'
import { Login } from "./components/common/Login"
import { AgencySidebar } from './components/layouts/AgencySidebar'
import { AddScreen } from './components/agency/AddScreen'
import { Signup } from './components/common/Signup'
import axios from 'axios'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"


// import './App.css'

function App() {
  
  axios.defaults.baseURL = "http://localhost:3000"

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);


  return (


    <div
      className={
        location.pathname === "/login" || location.pathname === "/signup"
          ? ""
          : "app-wrapper"
      }
    >
      <Routes>

        <Route path="/user" element={<UserSidebar />}>
          <Route path="profile" element={<UserProfile />}></Route>
        </Route>
        <Route path="/agency" element={<AgencySidebar></AgencySidebar>}>
          <Route path='addscreen' element={<AddScreen />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

      </Routes>
    </div>
  )
}

export default App
