import '../App.css'

export default function FeatureCard({ icon, title, children}) {
    return (
        <div class="card">
            <div class="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}