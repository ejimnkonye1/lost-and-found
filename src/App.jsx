import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Navbar } from "./component.jsx/navbar"
import { Reports } from "./pages/reports"
import { Contact } from "./pages/Contact"
import { Abou } from "./pages/about"
import { Dashboard } from "./pages/dashboard"


function App() {


  return (
    <>
   
    <div  className=" ">

  
    <Router>
    <Navbar />
      <Routes>
       
       
        <Route path='/' element={<Home />}    />
        <Route path='/reports' element={<Reports />}    />
        <Route path='/contact' element={<Contact />}    />
        <Route path='/about' element={<Abou />}    />
        <Route path='/dashboard' element={<Dashboard />}    />
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
