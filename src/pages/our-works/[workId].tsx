'use client';
import { useParams } from 'next/navigation';

export function OurWorkDetailPage() {
  const { workId } = useParams();

  return <div>WORK ID: {workId}</div>;
}
