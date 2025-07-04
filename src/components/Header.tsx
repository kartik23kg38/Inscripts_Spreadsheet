// @ts-ignore
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { GiOpenFolder } from 'react-icons/gi';

function Header() {
  return (
    <>
      <div className="flex items-center justify-between bg-white shadow-md">
        {/* Path - left upper part of header */}
        <div className="path flex border border-gray-300 rounded-lg p-2">
          <div className="breadcrumbs flex items-center space-x-2 px-2">
            <button className="text-gray-600 hover:text-gray-800">
              Workspace
            </button>
            <span className="text-gray-600">&gt;</span>
            <button className="text-gray-600 hover:text-gray-800">
              Folder 2
            </button>
            <span className="text-gray-600">&gt;</span>
            <button className=" hover:text-gray-800">
              Spreadsheet 3
            </button>
          </div>
          {/* <div>
          <IoEllipsisHorizontal />
        </div> */}
        </div>
        {/* Actions-Right - right upper part of header */}
        <div className="actions_right bg-blue-600">
          {/* text input and profile photo circular and name of the profile*/}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search within the sheet"
              className="bg-gray-100 text-sm rounded-lg pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* john doe profile with its circular profile w-8 h-8 */}
            <div className="profile flex items-center p-1">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-white text-sm">JD</span>
              </div>
              <span className="text-white text-sm p-2">John Doe</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-2 p-4 shadow-lg items-center space-x-1 bg-green-400 rounded-lg">
        <div className="text-gray-600">
          <span className="p-2 rounded-lg">Tool bar</span>
        </div>

        {/* Separator */}
        <div className="separator py-1 font-bold text-gray-600">
          |
        </div>

        <div className="flex items-center w-[1318px] justify-between ">
          {/* Table Controls */}
          <div
            className="table-controls py-2 flex items-center space-x-4"
            style={{ width: '871px', height: '36px' }}
          >
            <button className="text-gray-600 px-2 tracking-wide hover:text-gray-800">
              Hide fields
            </button>
            <button className="text-gray-600 px-2 tracking-wide hover:text-gray-800">
              Sort
            </button>
            <button className="text-gray-600 px-2 tracking-wide hover:text-gray-800">
              Filter
            </button>
            <button className="text-gray-600 px-2 tracking-wide hover:text-gray-800">
              Filter
            </button>
            <button className="text-gray-600 px-2 tracking-wide hover:text-gray-800">
              Cell view
            </button>
          </div>

          {/* Actions Right */}
          <div
            className="actions-right flex items-center justify-between space-x-1 bg-pink-400 w-[487px] h-[36px]"
            // style={{ padding: '0 8px' }} // Adjust padding to fit within 437px
          >
            <button className="border border-gray-400  bg-white text-gray-600 p-2 rounded hover:bg-gray-100 w-[100px]">
              Import
            </button>
            <button className="border border-gray-400  bg-white text-gray-600 p-2 rounded hover:bg-gray-100 w-[100px]">
              Export
            </button>
            <button className="border border-gray-400  bg-white text-gray-600 p-2 rounded hover:bg-gray-100 w-[100px]">
              Share
            </button>
            <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-900 ">
              New Action
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
