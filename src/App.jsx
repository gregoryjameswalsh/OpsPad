import { Suspense, lazy, useState}  from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

// const PetList = lazy(() => import ('./pages/PetList'))
// const PetDetail = lazy(() => import ('./pages/PetDetail'))
// const EditPet = lazy(() => import ('./pages/EditPet'))
// const AddPet = lazy(() => import ('./pages/AddPet'))

const LandingPage = lazy(() => import ('./pages/LandingPage'))
const DashboardPage = lazy(() => import ('./pages/DashboardPage'))
const ShiftNotesPage = lazy(() => import ('./pages/ShiftNotesPage'))
const NewNotePage = lazy(() => import ('./pages/NewNotePage'))
const TaskListPage = lazy(() => import ('./pages/TaskListPage'))
const NotFoundPage = lazy(() => import ('./pages/NotFoundPage'))


function App() {
  
  // *** commented out for now while OpsPad framework built - will need to refactor in at a later date but related to appropriate dbs ***
  // const [petToEdit, setPetToEdit] = useState(null) 

  return (
    <div>

      <div>
        <Navbar />
      </div>

      <div className="App">
        <Router>
        <Routes>
          <Route path='/'          element={<Suspense fallback={<></>}><LandingPage /></Suspense>} />
          <Route path='/dashboard' element={<Suspense fallback={<></>}><DashboardPage /></Suspense>} />
          <Route path='/notes'     element={<Suspense fallback={<></>}><ShiftNotesPage /></Suspense>} />
          <Route path='/notes/new' element={<Suspense fallback={<></>}><NewNotePage /></Suspense>} />
          <Route path='/tasks'     element={<Suspense fallback={<></>}><TaskListPage /></Suspense>} />
          <Route path='*'          element={<Suspense fallback={<></>}><NotFoundPage /></Suspense>} />
        </Routes>
        </Router>
      </div>

      <div>
        <Footer />
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