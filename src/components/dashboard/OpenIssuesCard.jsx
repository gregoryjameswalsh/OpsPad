import Card from '../UI/Card';

export default function OpenIssuesCard({ className = '' }) {
  const issues = [
    'Leaky faucet in kitchen',
    'Staff shortage for evening shift',
    'Low on wine glasses',
  ];

  return (
    <Card title="Open Issues" className={className}>
      <ul className="list-disc list-inside space-y-1">
        {issues.map((i, idx) => <li key={idx}>{i}</li>)}
      </ul>
    </Card>
  );
}