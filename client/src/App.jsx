
import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './components/header/Nav.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'


function App() {
  return (

  <div className=" bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white min-h-screen flex flex-col">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phone/login" element={<Login />} />
          <Route path="/phone/register" element={<Register />} />
        </Routes>
   </div>

  )
}

export default App
