import React from 'react';
import Header from './components/Header';
import Table from './components/Table';

// Sample data (limited to 25 rows)
const sampleData: {
  sNo: number;
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  extract: string;
  action: string;
}[] = Array.from({ length: 25 }, (_, i) => ({
  sNo: i + 1,
  jobRequest: `Job ${i + 1}`,
  submitted: `2023-0${i + 1}-01`,
  status: i % 2 === 0 ? 'Pending' : 'Completed',
  submitter: `User ${i + 1}`,
  url: `http://example${i + 1}.com`,
  assigned: 'Assigned',
  priority: i % 3 === 0 ? 'High' : 'Low',
  dueDate: `2023-0${i + 1}-15`,
  extract: `Extract ${i + 1}`,
  action: '+',
}));

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-4 flex justify-center">
      <div className="w-[1440px]">
        <Header />
        <Table data={sampleData} />
      </div>
    </div>
  );
}

export default App;
