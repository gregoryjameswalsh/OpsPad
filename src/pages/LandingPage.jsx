import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import { FiBook, FiClipboard } from 'react-icons/fi'

export default function LandingPage() {
    return (
        <div>
            <Hero />
            <div>
                <FeatureCard icon={<FiBook />} title="Shift Handover Notes">
                    Record important information for next Shift
                </FeatureCard>
                <FeatureCard icon={<FiClipboard />} title="Task Checklists">
                    Track daily tasks and ensure completion
                </FeatureCard>
            </div>
        </div>
    )
}