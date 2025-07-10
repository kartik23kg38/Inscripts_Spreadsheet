import React, { JSX, useRef, useEffect } from 'react';
import {
  BriefcaseBusiness,
  Captions,
  ChevronDown,
  Ellipsis,
  Globe,
  RefreshCcw,
  UserRound,
  UserRoundCheckIcon,
} from 'lucide-react';

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
const Table: React.FC<TableProps> = (): JSX.Element => {
  const tableRef = useRef<HTMLTableElement>(null);

  // Sample data (move to parent component if needed)
  const tableData: RowData[] = [
    {
      sNo: 1,
      jobRequest: 'Launch social media campaign for product launch',
      submitted: '05-12-2024',
      status: 'In-process',
      submitter: 'Aisha Patel',
      url: 'www.aishapatel.com',
      assigned: 'Sophie Choudhury',
      priority: 'Medium',
      dueDate: '20-01-2024',
      extract: '6,200,000',
      action: '+',
    },
    {
      sNo: 2,
      jobRequest: 'Update press kit for company redesign',
      submitted: '05-12-2024',
      status: 'Need to start',
      submitter: 'Irfan Khan',
      url: 'www.irfankhan.com',
      assigned: 'Tejas Pandey',
      priority: 'High',
      dueDate: '30-10-2024',
      extract: '3,500,000',
      action: '+',
    },
    {
      sNo: 3,
      jobRequest: 'Finalize user testing feedback for app',
      submitted: '05-12-2024',
      status: 'In-process',
      submitter: 'Mark Johnson',
      url: 'www.markjohnson.com',
      assigned: 'Rachel Lee',
      priority: 'Medium',
      dueDate: '10-12-2024',
      extract: '4,750,000',
      action: '+',
    },
    {
      sNo: 4,
      jobRequest: 'Design new features for the website',
      submitted: '30-11-2024',
      status: 'Complete',
      submitter: 'Emily Green',
      url: 'www.emilygreen.com',
      assigned: 'Tom Wright',
      priority: 'Low',
      dueDate: '15-01-2025',
      extract: '5,900,000',
      action: '+',
    },
    {
      sNo: 5,
      jobRequest: 'Prepare financial report for Q4',
      submitted: '25-01-2025',
      status: 'Blocked',
      submitter: 'Jessica Brown',
      url: 'www.jessicabrown.com',
      assigned: 'Kevin Smith',
      priority: 'High',
      dueDate: '30-01-2025',
      extract: '2,800,000',
      action: '+',
    },
  ];

  // Function to handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTableElement>) => {
    if (
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)
    ) {
      event.preventDefault();
      console.log(`Navigated with ${event.key}`);
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    const table = tableRef.current;
    if (table) {
      table.setAttribute('tabIndex', '0');
    }
  }, []);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-800';
      case 'In-process':
        return 'bg-yellow-100 text-yellow-800';
      case 'Need to start':
        return 'bg-purple-200 text-blue-600';
      case 'Blocked':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case 'High':
        return 'text-red-500';
      case 'Medium':
        return 'text-yellow-500';
      case 'Low':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  const handleActionClick = (row: RowData) => {
    console.log(`Action clicked for row ${row.sNo}: ${row.jobRequest}`);
  };

  const handleUrlClick = (url: string) => {
    console.log(`URL clicked: ${url}`);
  };

  const handleCellClick = (field: string, value: string) => {
    console.log(`Cell clicked - ${field}: ${value}`);
  };

  return (
    <div className="w-full bg-white">
      <div className="overflow-x-auto">
        <table
          className="w-full border-collapse"
          ref={tableRef}
          onKeyDown={handleKeyDown}
        >
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-1 text-center text-md font-medium text-gray-700 w-8">
                #
              </th>
              <th
                colSpan={4}
                className="border-2 border-white bg-gray-300 p-1 text-left text-xs font-medium text-gray-700 w-[240px]"
              >
                <div className="flex items-center p-1 rounded-lg bg-gray-200">
                  <span className="text-blue-600 text-sm">📊</span>
                  <span className="ml-2 text-gray-600 text-sm pr-2">
                    Q3 Financial Overview
                  </span>
                  <RefreshCcw size={16} color="red" />
                </div>
              </th>
              <th className="border-2 border-white text-left text-xs font-medium text-gray-700 p-1">
                <div className="text-center items-center p-0.5">
                  <div className="text-gray-600 font-semibold"></div>
                </div>
              </th>
              <th className="border-2 border-white bg-green-200 text-sm font-medium text-gray-700 w-32 p-1">
                <div className="flex justify-center items-center space-x-1 rounded-lg">
                  <div className="text-gray-600 font-semibold">ABC</div>
                  <Ellipsis size={16} className="stroke-gray" />
                </div>
              </th>

              <th
                colSpan={2}
                className="border-2 border-white p-1 text-left text-sm font-medium text-gray-700 w-60 bg-purple-300"
              >
                <div className="text-center text-gray-600 font-bold">
                  Answer a question
                </div>
              </th>
              <th className="border-2 border-white bg-red-300 p-1 text-left text-sm font-medium text-gray-700 w-32">
                <div className="text-gray-600 font-bold text-center">
                  Extract
                </div>
              </th>
              <th className="border border-white text-2xl text-center bg-gray-300 font-medium text-gray-700 w-16 p-1">
                +
              </th>
            </tr>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-0.5 text-xs font-medium text-gray-600"></th>
              <th className="border border-gray-300 p-1 w-[60px]">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1">
                    <BriefcaseBusiness size={16} color="gray" />
                    <div className="text-xs text-left text-gray-600 truncate">
                      Job Request
                    </div>
                  </div>
                  <ChevronDown size={18} color="gray" />
                </div>
              </th>
              <th className="border border-gray-300 p-1 w-[60px]">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1">
                    <Captions size={16} color="gray" />
                    <div className="text-xs text-left text-gray-600 truncate">
                      Submitted
                    </div>
                  </div>
                  <ChevronDown size={18} color="gray" />
                </div>
              </th>
              <th className="border border-gray-300 p-1 w-[60px]">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1">
                    <div className="bg-gray-300 rounded-full w-4 h-4">
                      <ChevronDown size={16} color="white" />
                    </div>
                    <div className="text-xs text-left text-gray-600 truncate">
                      Status
                    </div>
                  </div>
                  <ChevronDown size={18} color="gray" />
                </div>
              </th>
              <th className="border border-gray-300 p-1 w-[60px]">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1">
                    <UserRound size={16} color="gray" />
                    <div className="text-xs text-left text-gray-600 truncate">
                      Submitter
                    </div>
                  </div>
                  <ChevronDown size={18} color="gray" />
                </div>
              </th>
              <th className="border border-gray-300 p-1 w-[60px]">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1">
                    <Globe size={16} color="gray" />
                    <div className="text-xs text-left text-gray-600 truncate">
                      URL
                    </div>
                  </div>
                  <ChevronDown size={18} color="gray" />
                </div>
              </th>
              <th className="border border-gray-300 p-0.5 border-l-0 border-r w-[100px]">
                <div className="flex items-center space-x-1 pl-1">
                  <UserRoundCheckIcon size={16} />
                  <div className="text-xs text-gray-600 truncate">Assigned</div>
                </div>
              </th>

              <th className="border border-gray-300 p-1 w-16">
                <div className="text-xs text-left text-gray-600">
                  ⚡ Priority
                </div>
              </th>
              <th className="border border-gray-300 p-1 w-16">
                <div className="text-xs text-left text-gray-600">
                  📅 Due Date
                </div>
              </th>
              <th className="border border-gray-300 p-1 w-32">
                <div className="text-xs text-left text-gray-600">
                  📊 Est. Value
                </div>
              </th>
              <th className="border border-gray-300 p-0.5 w-16"></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td
                  className="border border-gray-300 text-center text-sm text-gray-700 p-0.5"
                  onClick={() => handleCellClick('sNo', row.sNo.toString())}
                >
                  {row.sNo}
                </td>
                <td
                  className="border border-gray-300 pl-1 w-[60px]"
                  onClick={() => handleCellClick('jobRequest', row.jobRequest)}
                >
                  <div className="text-xs text-gray-800 font-medium truncate">
                    {row.jobRequest}
                  </div>
                </td>
                <td
                  className="border border-gray-300 text-right border-l-0 border-r w-[60px]"
                  onClick={() => handleCellClick('submitted', row.submitted)}
                >
                  <div className="text-xs p-2 font-semibold text-gray-600 truncate">
                    {row.submitted}
                  </div>
                </td>
                <td
                  className="border border-gray-300 p-0.5 border-l-0 border-r w-[80px] text-center"
                  onClick={() => handleCellClick('status', row.status)}
                >
                  <span
                    className={`px-1 py-0.5 rounded-lg font-bold text-xs ${getStatusColor(row.status)}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td
                  className="border border-gray-300 p-0.5 border-l-0 w-[60px] text-center"
                  onClick={() => handleCellClick('submitter', row.submitter)}
                >
                  <div className="text-sm text-gray-700 truncate">
                    {row.submitter}
                  </div>
                </td>
                <td
                  className="border border-gray-300 p-0.5 w-[60px]"
                  onClick={() => handleCellClick('url', row.url)}
                >
                  <div
                    className="text-sm text-center underline cursor-pointer truncate"
                    onClick={() => handleUrlClick(row.url)}
                  >
                    {row.url}
                  </div>
                </td>
                <td
                  className="border border-gray-300 p-0.5 border-l-0 border-r w-[60px] text-center"
                  onClick={() => handleCellClick('assigned', row.assigned)}
                >
                  <div className="text-sm text-gray-700 truncate">
                    {row.assigned}
                  </div>
                </td>
                <td
                  className="border border-gray-300 p-0.5 w-16 text-center"
                  onClick={() => handleCellClick('priority', row.priority)}
                >
                  <span
                    className={`px-1 text-xs ${getPriorityColor(row.priority)} font-bold`}
                  >
                    {row.priority}
                  </span>
                </td>
                <td
                  className="border border-gray-300 p-0.5 w-16 text-right"
                  onClick={() => handleCellClick('dueDate', row.dueDate)}
                >
                  <div className="text-xs text-gray-600 font-semibold">
                    {row.dueDate}
                  </div>
                </td>
                <td
                  className="border border-gray-300 p-2 text-right text-xs text-gray-600 font-semibold"
                  onClick={() => handleCellClick('extract', row.extract)}
                >
                  {row.extract}
                </td>
                <td
                  className="border border-gray-300 p-0.5 w-16 text-center"
                  onClick={() => handleActionClick(row)}
                >
                  <span className="text-2xl cursor-pointer"></span>
                </td>
              </tr>
            ))}
            {Array.from({ length: 10 }, (_, i) => (
              <tr key={i + tableData.length + 1} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-0.5 text-sm text-gray-400 text-center">
                  {i + tableData.length + 1}
                </td>
                <td className="border border-gray-300 p-0.5 h-6 w-[60px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-[60px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-[80px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-[60px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-[60px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-[60px]"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-16"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-16"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-32"></td>
                <td className="border border-gray-300 p-0.5 h-6 w-16"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
