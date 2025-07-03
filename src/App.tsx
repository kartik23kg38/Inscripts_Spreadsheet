import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <Header />
      <div className="bg-white p-4 shadow-lg">Table will go here</div>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Ask to edit</button>
    </div>
  );
}

export default App;