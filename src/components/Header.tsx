function Header() {
  return (
    <header className="bg-white p-4 shadow flex justify-between items-center">
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-2 py-1 rounded-lg">Hide fields</button>
        <button className="bg-blue-500 text-white px-2 py-1 rounded-lg">Sort</button>
        <button className="bg-blue-500 text-white px-2 py-1 rounded-lg">Filter</button>
        <select className="bg-green-500 text-white px-2 py-1 rounded-lg">
          <option>New Action</option>
          <option>Extract...</option>
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-500">Search within sheet</span>
        <input type="text" className="border p-1 rounded-r-full pl-2 " placeholder="Search..." />
        <div className="bg-gray-200 p-1 rounded flex items-center">
          <span className="text-sm text-gray-600">John Doe</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full ml-2"></div> {/* Placeholder for avatar */}
        </div>
      </div>
    </header>
  );
}
export default Header;