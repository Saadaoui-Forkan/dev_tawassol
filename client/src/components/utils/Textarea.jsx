import React from 'react'

function Textarea({ label, value, onChange, id }) {
  return (
    <div className="mb-6 ml-4">
      <div className="w-full">
        <label className="w-full md:w-9/12 text-gray-500 font-bold pr-4 text-sm ml-2" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="w-full">
        <textarea
          className="w-11/12 md:w-9/12 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
          id={id}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Textarea