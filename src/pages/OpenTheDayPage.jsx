import { Link } from "react-router-dom"

import "../App.css"

export default function OpenTheDayPage() {
  return (
  <div className="card">
    <p className="text-center py-20">Open The Day Page - holding</p>
    <Link to="/Dashboard" className="btn-primary">Click to acknowledge handover notes</Link>
    
    </div>
  )
}