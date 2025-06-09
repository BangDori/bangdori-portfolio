import React from 'react';

interface CompanyCardProps {
  name: string;
  period: string;
  children: React.ReactNode;
}

export default function CompanyCard({ name, period, children }: CompanyCardProps) {
  return (
    <div className="mb-8 rounded-xl border p-6 shadow">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="text-sm text-gray-500">{period}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}
