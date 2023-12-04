import React from 'react'
import { useState } from 'react';

function Bgcolors() {
  const [color, setColor] = useState("black")
  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }} >
        <div className="fixed flex-wrap flex justify-center ml-5 mr-5 px-5 py-2 rounded-xl inset-x-0 bottom-12 bg-slate-300 gap-3">
          <button
            onClick={() => setColor("green")}
            className="rounded-xl	border-1 bg-green-500 btn-large py-1 px-5 text-white font-bold">
            Green
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none shadow-lg rounded-xl	border-1 bg-red-500 btn-large py-1 px-5 text-white font-bold">
            Red
          </button>
          <button onClick={() => setColor("blue")} className="rounded-xl	border-1 bg-blue-500 btn-large py-1 px-5 text-white font-bold">
            Blue
          </button>
          <button onClick={() => setColor("yellow")} className="rounded-xl	border-1 bg-yellow-500 btn-large py-1 px-5 text-white font-bold">
            Yellow
          </button>
          <button onClick={() => setColor("orange")} className="rounded-xl	border-1 bg-orange-500 btn-large py-1 px-5 text-white font-bold">
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default Bgcolors