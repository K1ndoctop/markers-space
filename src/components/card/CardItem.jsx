import React, { useState } from "react";
import { deleteEvent, getOneEvent } from "../../store/event/eventAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CardItem = ({ event }) => {
  const { isAdmin } = useSelector((state) => state.account);
  const navigate = useNavigate();
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
        {isAdmin && (
          <>
            <button
              onClick={() => {
                navigate("/card-edit");
              }}
              className="bg-gray-500 w-1/4 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteEvent(event.id))}
              className="bg-gray-500 w-1/4 rounded-md"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CardItem;
