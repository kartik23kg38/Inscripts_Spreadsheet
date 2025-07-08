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
      action: "+",
    },
    {
      sNo: 2,
      jobRequest: "Update press kit for company redesign",
      submitted: "05-12-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankhan.com",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      extract: "3,500,000",
      action: "+",
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
      action: "+",
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
      action: "+",
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
      action: "+",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Complete":
        return "bg-green-100 text-green-800";
      case "In-process":
        return "bg-yellow-100 text-yellow-800";
      case "Need to start":
        return "bg-purple-200 text-blue-600";
      case "Blocked":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return " text-red-500";
      case "Medium":
        return "text-yellow-500";
      case "Low":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-1 text-center text-md font-medium text-gray-700 w-8">
                #
              </th>
              <th colSpan={4} className="border-2 border-white bg-gray-300 p-1 text-left text-xs font-medium text-gray-700 w-[240px]">
                <div className="flex items-center p-1 rounded-lg bg-gray-200">
                  <span className="text-blue-600 text-sm">📊</span>
                  <span className="ml-2 text-gray-600 text-sm">Q3 Financial Overview</span>
                </div>
              </th>
              <th className="border-2 border-white text-left text-xs font-medium text-gray-700 p-1">
                <div className="text-center items-center p-0.5">
                  <div className="text-gray-600 font-semibold"></div>
                </div>
              </th>
              <th className="border-2 border-white bg-green-200 text-sm font-medium text-gray-700 w-32 p-1">
                <div className="text-center rounded-lg items-center">
                  <div className="text-gray-600 font-semibold">ABC</div>
                </div>
              </th>
              <th className="border-2 border-white p-1 text-left text-sm font-medium text-gray-700 w-60 bg-purple-300">
                <div className="text-center text-gray-600 font-bold">Answer a question</div>
              </th>
              <th className="border-2 border-white bg-red-300 p-1 text-left text-sm font-medium text-gray-700 w-32">
                <div className="text-gray-600 font-bold text-center">Extract</div>
              </th>
              <th className="border border-white text-2xl text-center bg-gray-300 font-medium text-gray-700 w-16 p-1">
                +
              </th>
            </tr>

            {/* Row - 2nd */}
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-0.5 text-xs font-medium text-gray-600"></th>
              <th className="border border-gray-300 p-1 w-[60px]">
                <div className="text-xs text-left text-gray-600 truncate">📋 Job Request</div>
              </th>
              <th className="border border-gray-300 p-0.5 border-l-0 border-r w-[60px]">
                <div className="text-xs text-gray-600 truncate">📅 Submitted</div>
              </th>
              <th className="border border-gray-300 p-0.5 border-l-0 border-r w-[60px]">
                <div className="text-xs text-gray-600 truncate">⭕ Status</div>
              </th>
              <th className="border border-gray-300 p-0.5 border-l-0 w-[60px]">
                <div className="text-xs text-gray-600 truncate">👤 Submitter</div>
              </th>
              <th className="border border-gray-300 p-0.5 w-[60px]">
                <div className="text-xs text-gray-600 truncate">🔗 URL</div>
              </th>
              <th className="border border-gray-300 p-0.5 border-l-0 border-r w-[60px]">
                <div className="text-xs text-gray-600 truncate">✅ Assigned</div>
              </th>
              <th className="border border-gray-300 p-1">
                <div className="grid grid-cols-2 gap-0.5 text-xs">
                  <div className="text-gray-600 border-r border-gray-300 text-left">⚡ Priority</div>
                  <div className="text-gray-600 pl-1 text-left">📅 Due Date</div>
                </div>
              </th>
              <th className="border border-gray-300 p-1 ">
                <div className="text-xs text-left text-gray-600">📊 Est. Value</div>
              </th>
              <th className="border border-gray-300 p-0.5"></th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="bg-red-400 border border-gray-300 text-center text-sm text-gray-700 p-0.5">
                  {row.sNo}
                </td>
                <td className="border border-gray-300 pl-1 w-[60px]">
                  <div className="text-xs text-gray-800 font-medium truncate">{row.jobRequest}</div>
                </td>
                <td className=" border border-gray-300 text-right border-l-0 border-r w-[60px]">
                  <div className="text-xs pr-1 text-gray-600 truncate">{row.submitted}</div>
                </td>
                <td className="border border-gray-300 p-0.5 border-l-0 border-r w-[80px] text-center">
                  <span
                    className={`px-1 py-0.5 rounded-lg font-bold text-xs ${getStatusColor(row.status)}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="border border-gray-300 p-0.5 border-l-0 w-[60px] text-center">
                  <div className="text-sm text-gray-700 truncate">{row.submitter}</div>
                </td>
                <td className="border border-gray-300 p-0.5 w-[60px]">
                  <div className="text-sm text-center underline cursor-pointer truncate">
                    {row.url}
                  </div>
                </td>
                <td className="border border-gray-300 p-0.5 border-l-0 border-r w-[60px] text-center">
                  <div className="text-sm text-gray-700 truncate">{row.assigned}</div>
                </td>
                <td className="border border-gray-300 p-0.5 w-32">
                  <div className="grid grid-cols-2 gap-0.5 text-sm text-right">
                    <span
                      className={`px-1 rounded text-xs ${getPriorityColor(row.priority)} border-r border-gray-300 text-center font-bold`}
                    >
                      {row.priority}
                    </span>
                    <div className="text-xs text-gray-600 font-semibold pr-1">{row.dueDate}</div>
                  </div>
                </td>
                <td className="border border-gray-300 p-1 text-right text-xs text-gray-600 font-semibold">
                  {row.extract}
                </td>
                <td className="border border-gray-300 ">
                  
                </td>
              </tr>
            ))}

            {/* Empty rows to match the screenshot */}
            {Array.from({ length: 10 }, (_, i) => (
              <tr key={i + 6} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-0.5 text-sm text-gray-400">
                  {i + 6}
                </td>
                <td className="border border-gray-300 p-0.5 h-6 w-[60px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-[60px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-[60px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-[60px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-[60px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-[60px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-32"></td>
                <td className="border border-gray-300 p-0.5 h-6"></td>
                <td className="border border-gray-300 p-0.5 h-6"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;