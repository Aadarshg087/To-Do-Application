import React, { useState } from "react";

const AddTasks = (props) => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="w-full px-2 my-5  flex items-center justify-between rounded-md b">
      <input className="outline-none pl-4 text-xl font-semibold py-3 px-2 flex-1 h-12 flex items-center bg-white rounded-lg">
        {props.text}
      </input>
      <div className="flex gap-2  h-full ml-2">
        <button className="bg-green-500 text-white px-5 h-12 rounded-lg">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTasks;
