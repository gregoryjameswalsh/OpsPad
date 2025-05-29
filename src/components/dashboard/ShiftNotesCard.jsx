import Card from '../UI/Card';

export default function ShiftNotesCard({ className = '' }) {
  const latestNote = /* fetch or prop */ {
    notes: 'Morbi pharetra…',
    createdAt: 'Today, 11:30 am',
  };

  return (
    <Card title="Shift Notes" className={className}>
      <p className="mb-4">{latestNote.notes}</p>
      <p className="text-sm text-gray-500">{latestNote.createdAt}</p>
    </Card>
  );
}