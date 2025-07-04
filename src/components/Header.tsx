import { IoEllipsisHorizontal } from "react-icons/io5";

function Header() {
  return (
    <div className="flex items-center justify-between bg-white shadow-md">
      <div className="path bg-violet-500 flex border border-gray-300 rounded-lg p-2">
        <div>
          <IoEllipsisHorizontal />
        </div>
        <div className="breadcrumbs bg-amber-400 flex items-center space-x-2 px-2">
          <button className="text-gray-600 hover:text-gray-800">
            Workspace
          </button>
          <span className="text-gray-600">&gt;</span>
          <button className="text-gray-600 hover:text-gray-800">
            Folder 2
          </button>
          <span className="text-gray-600">&gt;</span>
          <button className="text-gray-600 hover:text-gray-800">
            Spreadsheet 3
          </button>
        </div>
      </div>
      <div className="actions_right bg-blue-600">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing hello</p>
      </div>
    </div>
  );
}
export default Header;
