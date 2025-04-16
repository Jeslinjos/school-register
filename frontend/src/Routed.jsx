import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Studentloginpage from './pages/Studentloginpage'
import Studentregisterpage from './pages/Studentregisterpage'
import Teacherloginpage from './pages/Teacherloginpage'
import Teacherregisterpage from './pages/Teacherregisterpage'
import Studentdashboard from './pages/Studentdashboard'
import Teacherdashboard from './pages/Teacherdashboard'

function Routed() {
  return (
    <>
    <Routes>

    <Route path='/' element={<Landingpage/>}/>
    <Route path='/student-log' element={<Studentloginpage/>}/>
    <Route path='/student-reg' element={<Studentregisterpage/>}/>
    <Route path='/teacher-log' element={<Teacherloginpage/>}/>
    <Route path='/teacher-reg' element={<Teacherregisterpage/>}/>
    <Route path='/student-dash' element={<Studentdashboard/>}/>
    <Route path='/teacher-dash' element={<Teacherdashboard/>}/>

    </Routes>
    </>
  )
}

export default Routed