import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold underline text-indigo-400">
          Hello world!
        </h1>
      </div>
      <div className=" flex justify-between flex-row w-1/2 mx-auto items-centar h-24 bg-slate-400 mt-20 rounded-xl px-8 ">
        <div className="flex  justify-center items-center bg-blue-500 w-16 h-16 text-white font-bold underline rounded-full ">
          prvi
        </div>
        <div className="flex  justify-center items-center bg-orange-500 w-16 h-16 text-white font-bold underline rounded-xl ">
          prvi
        </div>
        <div className="flex  justify-center items-center bg-red-500 w-16 h-16 text-white font-bold underline rounded-lg ">
          prvi
        </div>
        {/* <button className="bg-blue-500 hover:bg-blue-50 transition text-white font-bold py-4  px-10 rounded-xl">
          Sing In
        </button> */}
      </div>
    </>
  );
}

export default App;
