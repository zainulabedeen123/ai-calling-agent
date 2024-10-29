"use client"; // Ensure this is a Client Component if using useState or useEffect

import { useState, useEffect } from 'react';
import { Call } from 'types/vapiTypes';

const Dashboard: React.FC = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        const response = await fetch('/api/calls');
        const data = await response.json();
        setCalls(data);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching calls:', error);
      }
    };

    fetchCalls();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>; // This prevents mismatch by waiting for data to load
  }

  return (
    <div>
      <h1>Call Management Dashboard</h1>
      <ul>
        {calls.map(call => (
          <li key={call.id}>
            <strong>{call.type}</strong> - Status: {call.status} - Created: {new Date(call.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
