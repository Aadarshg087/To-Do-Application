import Card from "./components/Card";
import AddTasks from "./components/AddTasks";

function App() {
  return (
    <div className=" bg-slate-700  h-screen flex justify-center">
      <div className="border flex flex-col h-fit justify-around mt-28 w-2/4">
        <h1 className=" text-7xl text-amber-400 font-mono font-black  text-center">
          Your To-Do List
        </h1>
        <AddTasks />
        <p className="text-2xl font-semibold font-mono text-amber-400 pl-2 mt-6">
          Your Tasks:{" "}
        </p>
        <Card text={"Task one"} />
      </div>
    </div>
  );
}

export default App;
