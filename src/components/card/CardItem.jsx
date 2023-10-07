import React from "react";
import { deleteEvent } from "../../store/event/eventAction";
import { useDispatch } from "react-redux";

const CardItem = ({ event }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-1/4 m-4 p-2 flex-wrap bg-blue-400 rounded-lg relative">
      <img className="w-full" src={event.image} alt={event.name} />
      <h2 className="text-xl font-bold mt-2 mx-2">{event.name}</h2>
      <ul className="text-xs ml-2 text-gray-600">
        <li>{event.place}</li>
        <li>{event.date}</li>
      </ul>
      <h3 className="m-2">{event.description}</h3>
      <div className=" flex flex-row justify-around">
        <button className="bg-gray-500 w-1/4 rounded-md">Edit</button>
        <button
          onClick={() => dispatch(deleteEvent(event.id))}
          className="bg-gray-500 w-1/4 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardItem;
