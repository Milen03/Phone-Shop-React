
import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './components/header/Nav.jsx'
import Home from './components/home/Home.jsx'


function App() {
  return (

  <div className=" bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white min-h-screen flex flex-col">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
   </div>

  )
}

export default App
