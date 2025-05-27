import { Suspense, lazy, useState }  from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

const PetList = lazy(() => import ('./pages/PetList'))
const PetDetail = lazy(() => import ('./pages/PetDetail'))
const EditPet = lazy(() => import ('./pages/EditPet'))
const AddPet = lazy(() => import ('./pages/AddPet'))

function App() {
  const [petToEdit, setPetToEdit] = usesState(null)

  return (
    <div className="App">
      <Router>
        <h1>Pet shelter</h1>

        <Link to='/add'>
        <button>Add new pet</button>
        </Link>

        <Routes>
          <Route path='/' element={<Suspense fallback={<></>}><PetList /></Suspense>} />

          <Route path='/:petId' element={<Suspense fallback={<></>}><PetDetail setPetToEdit={setPetToEdit} /></Suspense>} />

          <Route path='/:petId/edit' element={<Suspense fallback={<></>}><EditPet petToEdit={petToEdit} /></Suspense>} />
          
          <Route path='/add' element={<Suspense fallback={<></>}><AddPet /></Suspense>} />
        </Routes>

      </Router>
    </div>
  )
}

export default App

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//
//function App() {
//  const [count, setCount] = useState(0)
//
//  return (
//    <>
//      <div>
//        <a href="https://vite.dev" target="_blank">
//          <img src={viteLogo} className="logo" alt="Vite logo" />
//        </a>
//        <a href="https://react.dev" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//        </a>
//      </div>
//      <h1>Vite + React</h1>
//      <div className="card">
//        <button onClick={() => setCount((count) => count + 1)}>
//          count is {count}
//        </button>
//        <p>
//          Edit <code>src/App.jsx</code> and save to test HMR
//        </p>
//      </div>
//      <p className="read-the-docs">
//        Click on the Vite and React logos to learn more
//      </p>
//    </>
//  )
//}
//
//export default App
