import React, { useState } from "react";
import { addEventCard } from "../../store/event/eventAction";
import { useDispatch } from "react-redux";

const CardCreate = () => {
  const [event, setEvent] = useState({
    image: "",
    name: "",
    description: "",
    date: "",
    place: "",
  });

  const dispatch = useDispatch();
  return (
    <div className="w-1/3 bg-blue-800">
      <div className="">
        <input
          type="text"
          placeholder="Image"
          onChange={(e) => setEvent({ ...event, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setEvent({ ...event, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Date"
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Place"
          onChange={(e) => setEvent({ ...event, place: e.target.value })}
        />
        <button onClick={() => dispatch(addEventCard(event))}>Add event</button>
      </div>
    </div>
  );
};

export default CardCreate;
