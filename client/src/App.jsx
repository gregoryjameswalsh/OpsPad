import { Suspense, lazy, useState}  from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './styles/app.css'
import './styles/Modal.css'
import './styles/tasks.css'

import PrivateRoute from './components/PrivateRoute'
import LandingLayout from './components/layouts/LandingLayout'
import AppLayout from './components/layouts/AppLayout';

const SignupPage = lazy(() => import('./pages/SignupPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))

const LandingPage = lazy(() => import ('./pages/LandingPage'))
const OpenTheDayPage = lazy(() => import ('./pages/OpenTheDayPage'))
const DashboardPage = lazy(() => import ('./pages/DashboardPage'))
const ShiftNotesPage = lazy(() => import ('./pages/ShiftNotesPage'))

const TaskListPage = lazy(() => import ('./pages/TaskListPage'))
const NotFoundPage = lazy(() => import ('./pages/NotFoundPage'))


function App() {
  
  // *** commented out for now while OpsPad framework built - will need to refactor in at a later date but related to appropriate dbs ***
  // const [petToEdit, setPetToEdit] = useState(null) 


  return (
    <div>
      <div className="Container">
      <div className="App">
        <Router>
        <Routes>

        {/* Standalone Auth Pages */}
          <Route path="/signup" element={<Suspense fallback={<></>}><SignupPage /></Suspense>} />
          <Route path="/login"  element={<Suspense fallback={<></>}><LoginPage /></Suspense>} />

          {/* Landing Page Layout */}
          <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
          </Route>

          {/* In-App Layout with Bottom Nav */}
          <Route element={<AppLayout />}>
          <Route path='/landing'          element={<Suspense fallback={<></>}><LandingPage /></Suspense>} />
          <Route path='/dashboard' element={<PrivateRoute><Suspense fallback={<></>}><DashboardPage /></Suspense></PrivateRoute>} />
          <Route path='/openday'   element={<PrivateRoute><Suspense fallback={<></>}><OpenTheDayPage /></Suspense></PrivateRoute>} />
          <Route path='/notes'     element={<PrivateRoute><Suspense fallback={<></>}><ShiftNotesPage /></Suspense></PrivateRoute>} />
          <Route path='/tasks'     element={<PrivateRoute><Suspense fallback={<></>}><TaskListPage /></Suspense></PrivateRoute>} />
          <Route path='*'          element={<Suspense fallback={<></>}><NotFoundPage /></Suspense>} />

          </Route>
        </Routes>
        </Router>
      </div>
      </div>
    </div>
  )
}

export default App

/*   

*** Previous Routes commented out as I build out the OpsPad framework - left for reference for the meantime!

          <Route path='/' element={<Suspense fallback={<></>}><PetList /></Suspense>} />
          <Route path='/:petId' element={<Suspense fallback={<></>}><PetDetail setPetToEdit={setPetToEdit} /></Suspense>} />
          <Route path='/:petId/edit' element={<Suspense fallback={<></>}><EditPet petToEdit={petToEdit} /></Suspense>} />
          <Route path='/add' element={<Suspense fallback={<></>}><AddPet /></Suspense>} />

*/