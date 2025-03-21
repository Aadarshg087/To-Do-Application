import React from "react";

const Card = (props) => {
  return (
    <div className="w-full px-2 mx-auto my-10  flex  items-center justify-between rounded-md b">
      <p className=" py-3 px-2 flex-1 h-full flex items-center bg-white rounded-lg">
        {props.text}
      </p>
      <div className="flex gap-2  h-full ml-2">
        <button className="bg-blue-500 text-white px-5 h-12 rounded-lg">
          Edit
        </button>
        <button className="bg-green-500 text-white px-5 h-12 rounded-lg">
          Done
        </button>
      </div>
    </div>
  );
};

export default Card;
