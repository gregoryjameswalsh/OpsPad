import { Link } from "react-router-dom"

import "../App.css"

export default function OpenTheDayPage() {
  return (
  <div className="card">
    <p className="text-center py-20">Open The Day Page - holding</p>
    <p>Saturday 31st May 2025</p>
    <p>Greg Walsh</p>
    <p>Handover notes from yesterday:</p>
    <p>"Quiet night, sent Bob home early. Managed to deep clean the cellar."</p>
    <Link to="/Dashboard" className="btn-primary">Click to acknowledge handover notes</Link>
    
    </div>
  )
}