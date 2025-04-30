
import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './components/header/Nav.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import { UserContext } from './context/userContext.js'
import usePersistedState from './hooks/usePersistedState.js'
import Logout from './components/logout/Logout.jsx'
import Create from './components/create/Create.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import Details from './components/details/Details.jsx'
import Edit from './components/edit/Edit.jsx'
import GuestGuard from './components/guards/guestGuard.jsx'
import AuthGuard from './components/guards/Authguard.jsx'
import MyProfile from './components/my-profil/MyProfil.jsx'
import Footer from './components/footer/Footer.jsx'


function App() {
  const [authData, setAuthData] = usePersistedState('auth', {})

  const userLoginHandeler = (resultData) => {
    setAuthData(resultData)
  }

  const userLogoutHandeler = () => {
    setAuthData({})
  }

  return (

    <div className=" bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white min-h-screen flex flex-col">
      <UserContext.Provider value={{ ...authData, userLoginHandeler, userLogoutHandeler }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phone/catalog" element={<Catalog />} />
          <Route path="/phone/:phoneId/details" element={<Details />} />

          <Route element={<GuestGuard />}>
            <Route path="/phone/login" element={<Login />} />
            <Route path="/phone/register" element={<Register />} />
          </Route>

          <Route element={<AuthGuard />}>
            <Route path="/phone/logout" element={<Logout />} />
            <Route path="/phone/create" element={<Create />} />
            <Route path="/phone/:phoneId/edit" element={<Edit />} />
            <Route path='/phone/my-profil' element={<MyProfile/>}/>
          </Route>
        </Routes>
        <Footer/>
      </UserContext.Provider>
    </div>

  )
}

export default App
