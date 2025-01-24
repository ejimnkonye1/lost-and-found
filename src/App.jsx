import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Navbar } from "./component/navbar"
import { Reports } from "./pages/reports"
import { Contact } from "./pages/Contact"
import {  About } from "./pages/about"
import { Dashboard } from "./pages/dashboard"
import { ResetPassword } from "./pages/resetpassword"
import { Login } from "./pages/login"
import { Regitser } from "./pages/register"
import { Footer } from "./component/footer"
import { ReportDetails } from "./pages/reportdetails"


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
        <Route path='/about' element={<About />}    />
        <Route path='/dashboard' element={<Dashboard />}    />
        <Route path='/resetpassword' element={<ResetPassword />}    />
        <Route path='/login' element={<Login />}    />
        <Route path='/register' element={<Regitser />}    />
        <Route path='/details/:id' element={<ReportDetails />}    />
      </Routes> 

      <Footer />
    </Router>

    </div>
    </>
  )
}

export default App
