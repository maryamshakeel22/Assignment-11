import React from 'react'

function ChildComponent(props:any) {
  return (
    <div className="flex flex-wrap justify-center gap-5 w-full ">
        <div className="flex flex-col items-center rounded-lg border border-pink-200 bg-white shadow-md text-center px-6 py-4 w-full ">
        <p className="py-2 text-2xl">Name: {props.name}</p>
        <p className="py-2 italic font-bold text-gray-700">Favourite Dish: {props.fvtdish}</p>
        <p className="py-2">Favourite Color: {props.fvtcolor}</p>
      </div>
    </div>
  )
}

export default ChildComponent;