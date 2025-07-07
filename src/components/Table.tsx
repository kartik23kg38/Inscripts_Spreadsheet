import React from 'react';

// Interface for table row data
interface RowData {
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
}

// Props interface for Table
interface TableProps {
  data: RowData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  // Create realistic data that matches the screenshot
  const tableData = [
    {
      sNo: 1,
      jobRequest: "Launch social media campaign for product launch",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel.com",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      dueDate: "20-01-2024",
      extract: "6,200,000",
      action: "+"
    },
    {
      sNo: 2,
      jobRequest: "Update press kit for company redesign",
      submitted: "",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankhan.com",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      extract: "3,500,000",
      action: "+"
    },
    {
      sNo: 3,
      jobRequest: "Finalize user testing feedback for app",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "www.markjohnson.com",
      assigned: "Rachel Lee",
      priority: "Medium",
      dueDate: "10-12-2024",
      extract: "4,750,000",
      action: "+"
    },
    {
      sNo: 4,
      jobRequest: "Design new features for the website",
      submitted: "30-11-2024",
      status: "Complete",
      submitter: "Emily Green",
      url: "www.emilygreen.com",
      assigned: "Tom Wright",
      priority: "Low",
      dueDate: "15-01-2025",
      extract: "5,900,000",
      action: "+"
    },
    {
      sNo: 5,
      jobRequest: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: "Blocked",
      submitter: "Jessica Brown",
      url: "www.jessicabrown.com",
      assigned: "Kevin Smith",
      priority: "High",
      dueDate: "30-01-2025",
      extract: "2,800,000",
      action: "+"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Complete': return 'bg-green-100 text-green-800';
      case 'In-process': return 'bg-yellow-100 text-yellow-800';
      case 'Need to start': return 'bg-blue-100 text-blue-800';
      case 'Blocked': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Tool bar</span>
          <div className="flex items-center space-x-2">
            <button className="text-sm text-gray-600 hover:text-gray-800">🔍 Hide Fields</button>
            <button className="text-sm text-gray-600 hover:text-gray-800">↕️ Sort</button>
            <button className="text-sm text-gray-600 hover:text-gray-800">🔽 Filter</button>
            <button className="text-sm text-gray-600 hover:text-gray-800">📊 Group</button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-sm text-gray-600 hover:text-gray-800">⬇️ Import</button>
          <button className="text-sm text-gray-600 hover:text-gray-800">⬆️ Export</button>
          <button className="text-sm text-gray-600 hover:text-gray-800">🔗 Share</button>
          <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">+ New Action</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-2 text-left text-xs font-medium text-gray-700 w-12">#</th>
              <th className="border border-gray-300 bg-gray-300 p-2 text-left text-xs font-medium text-gray-700 w-40">
                <div className="flex items-center p-1 rounded-lg bg-gray-200 ">
                  <span className="text-blue-600">📊</span>
                  <span className="ml-2 text-gray-600">Q3 Financial Overview</span>
                </div>
              </th>
              <th className="border border-gray-300 bg-green-200 text-left text-xs font-medium text-gray-700 w-32">
                <div className=" text-center rounded-lg border-blue-500 pl-2 items-center p-1" >
                  <div className="text-gray-600 font-semibold">ABC</div>
                </div>
              </th>
              <th className="border border-gray-300 p-2 text-left text-xs font-medium text-gray-700 w-32">
                <div className="text-blue-600 font-semibold">Answer a question</div>
              </th>
              <th className="border border-gray-300 p-2 text-left text-xs font-medium text-gray-700 w-32">
                <div className="text-blue-600 font-semibold">Extract</div>
              </th>
              <th className="border border-gray-300 p-2 text-center text-xs font-medium text-gray-700 w-16">+</th>
            </tr>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-1 text-xs font-medium text-gray-600"></th>
              <th className="border border-gray-300 p-1">
                <div className="grid grid-cols-4 gap-1 text-xs">
                  <div className="text-gray-600">📋 Job Request</div>
                  <div className="text-gray-600">📅 Submitted</div>
                  <div className="text-gray-600">⭕ Status</div>
                  <div className="text-gray-600">👤 Submitter</div>
                </div>
              </th>
              <th className="border border-gray-300 p-1">
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="text-gray-600">🔗 URL</div>
                  <div className="text-gray-600">✅ Assigned</div>
                </div>
              </th>
              <th className="border border-gray-300 p-1">
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="text-gray-600">⚡ Priority</div>
                  <div className="text-gray-600">📅 Due Date</div>
                </div>
              </th>
              <th className="border border-gray-300 p-1">
                <div className="text-xs text-gray-600">📊 Est. Value</div>
              </th>
              <th className="border border-gray-300 p-1"></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-sm text-gray-700">{row.sNo}</td>
                <td className="border border-gray-300 p-2">
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div className="text-gray-800 font-medium">{row.jobRequest}</div>
                    <div className="text-gray-600">{row.submitted}</div>
                    <div>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(row.status)}`}>
                        {row.status}
                      </span>
                    </div>
                    <div className="text-gray-700">{row.submitter}</div>
                  </div>
                </td>
                <td className="border border-gray-300 p-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-blue-600 hover:underline cursor-pointer">{row.url}</div>
                    <div className="text-gray-700">{row.assigned}</div>
                  </div>
                </td>
                <td className="border border-gray-300 p-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(row.priority)}`}>
                        {row.priority}
                      </span>
                    </div>
                    <div className="text-gray-700">{row.dueDate}</div>
                  </div>
                </td>
                <td className="border border-gray-300 p-2 text-sm text-gray-700 font-medium">{row.extract}</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button className="w-6 h-6 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                    +
                  </button>
                </td>
              </tr>
            ))}
            
            {/* Empty rows to match the screenshot */}
            {Array.from({ length: 10 }, (_, i) => (
              <tr key={i + 6} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-sm text-gray-400">{i + 6}</td>
                <td className="border border-gray-300 p-2 h-12"></td>
                <td className="border border-gray-300 p-2 h-12"></td>
                <td className="border border-gray-300 p-2 h-12"></td>
                <td className="border border-gray-300 p-2 h-12"></td>
                <td className="border border-gray-300 p-2 h-12"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;