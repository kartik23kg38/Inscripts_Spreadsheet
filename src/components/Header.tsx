import React, { JSX } from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

// Type assertion to fix TS2786
// const Icon = MdKeyboardDoubleArrowRight as React.ComponentType<{ className?: string }>;

interface HeaderProps {
  title?: string;
  items?: string[];
}

const Header: React.FC<HeaderProps> = ({
  title = 'Spreadsheet 3',
  items = ['Workspace', 'Folder 2', 'Spreadsheet 3'],
}): JSX.Element => {
  const handleBreadcrumbClick = (item: string) => {
    console.log(`Breadcrumb clicked: ${item}`);
  };

  const handleButtonClick = (action: string) => {
    console.log(`Button clicked: ${action}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Search query: ${event.target.value}`);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-white shadow-md p-2">
        <div className="path flex border border-gray-300 rounded-lg p-2">
          <div className="breadcrumbs flex items-center space-x-2 px-2">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <button
                  className="text-gray-600 hover:text-gray-800 text-sm"
                  onClick={() => handleBreadcrumbClick(item)}
                >
                  {item}
                </button>
                {index < items.length - 1 && (
                  <span className="text-gray-600">&gt;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="actions-right flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search within the sheet"
            className="bg-gray-100 text-sm rounded-lg pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            onChange={handleSearch}
          />
          <div className="profile flex items-center p-1">
            <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-white text-sm">JD</span>
            </div>
            <span className="text-sm pl-2 text-black">John Doe</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 flex gap-x-2 p-2 shadow-lg items-center rounded-lg">
        <div className="text-gray-600 flex items-center space-x-2">
          <span className="p-2 rounded-lg text-sm">Tool bar</span>
          {/* <Icon className="w-5 h-5" /> */}
        </div>

        <div className="separator font-bold text-gray-600">|</div>

        <div className="flex items-center w-[1318px] justify-between">
          <div
            className="table-controls flex items-center space-x-4"
            style={{ width: '871px', height: '36px' }}
          >
            <button
              className="text-gray-600 px-2 text-sm tracking-wide hover:text-gray-800"
              onClick={() => handleButtonClick('Hide fields')}
            >
              Hide fields
            </button>
            <button
              className="text-gray-600 px-2 text-sm tracking-wide hover:text-gray-800"
              onClick={() => handleButtonClick('Sort')}
            >
              Sort
            </button>
            <button
              className="text-gray-600 px-2 text-sm tracking-wide hover:text-gray-800"
              onClick={() => handleButtonClick('Filter')}
            >
              Filter
            </button>
            <button
              className="text-gray-600 px-2 text-sm tracking-wide hover:text-gray-800"
              onClick={() => handleButtonClick('Cell view')}
            >
              Cell view
            </button>
          </div>

          <div
            className="actions-right flex items-center justify-between space-x-1"
            style={{ width: '487px', height: '36px' }}
          >
            <button
              className="bg-white text-gray-600 p-2 rounded hover:bg-gray-100 w-[100px] text-sm"
              onClick={() => handleButtonClick('Import')}
            >
              Import
            </button>
            <button
              className="bg-white text-gray-600 p-2 rounded hover:bg-gray-100 w-[100px] text-sm"
              onClick={() => handleButtonClick('Export')}
            >
              Export
            </button>
            <button
              className="bg-white text-gray-600 p-2 rounded hover:bg-gray-100 w-[100px] text-sm"
              onClick={() => handleButtonClick('Share')}
            >
              Share
            </button>
            <button
              className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-900 text-sm"
              onClick={() => handleButtonClick('New Action')}
            >
              New Action
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
