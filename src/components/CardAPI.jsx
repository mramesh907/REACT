import React from 'react'

const CardAPI = (props) => {
  return (
    <div className="bg-white text-black inline-block p-6 rounded m-3">
      <img
        className="ml-8 h-20 w-20 rounded-full mb-3"
        src={props.photo}
        alt=""
      />
      <h1 className="text-2xl font-semibold mb-4">{props.author}</h1>
    </div>
  );
}

export default CardAPI