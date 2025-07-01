import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/app.css'
import './styles/Modal.css'
import './styles/tasks.css'

import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'
import OnboardedRoute from './components/OnboardedRoute'
import RouteGate from './components/RouteGate'
import LandingLayout from './components/layouts/LandingLayout'
import AppLayout from './components/layouts/AppLayout'

const SignupPage       = lazy(() => import('./pages/SignupPage'))
const LoginPage        = lazy(() => import('./pages/LoginPage'))
const OnboardingPage   = lazy(() => import('./pages/OnboardingPage'))
const LandingPage      = lazy(() => import('./pages/LandingPage'))
const OpenTheDayPage   = lazy(() => import('./pages/OpenTheDayPage'))
const DashboardPage    = lazy(() => import('./pages/DashboardPage'))
const ShiftNotesPage   = lazy(() => import('./pages/ShiftNotesPage'))
const TaskListPage     = lazy(() => import('./pages/TaskListPage'))
const NotFoundPage     = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <div className="Container">
      <div className="App">
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Auth Routes */}
              <Route path="/signup" element={
                <PublicRoute>
                  <SignupPage />
                </PublicRoute>
                } />
              <Route path="/login" element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              } />

              {/* Routing logic brain */}
              <Route path="/gate" element={<RouteGate />} />

              {/* Onboarding route if user not yet onboarded */}
              <Route path="/onboarding" element={
                <OnboardedRoute>
                  <OnboardingPage />
                </OnboardedRoute>
              } />

              {/* Landing Page Layout */}
              <Route element={<LandingLayout />}>
                <Route path="/" element={<LandingPage />} />
              </Route>

              {/* Authenticated In-App Layout */}
              <Route element={<AppLayout />}>
                <Route path="/landing"    element={<LandingPage />} />
                <Route path="/dashboard"  element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
                <Route path="/openday"    element={<PrivateRoute><OpenTheDayPage /></PrivateRoute>} />
                <Route path="/notes"      element={<PrivateRoute><ShiftNotesPage /></PrivateRoute>} />
                <Route path="/tasks"      element={<PrivateRoute><TaskListPage /></PrivateRoute>} />
                <Route path="*"           element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </div>
    </div>
  )
}

export default App