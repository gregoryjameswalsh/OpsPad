export default function FeatureCard({ icon, title, children}) {
    return (
        <div>
            <div>{icon}</div>
            <div>{title}</div>
            <p>{children}</p>
        </div>
    )
}