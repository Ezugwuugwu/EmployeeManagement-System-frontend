import React from 'react'

const Employee = (employee, deleteEmployee) => {
  return (
    <tr >
        <td className="text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">Oluwafemi</div>
            </td>
        
            <td className="text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">Baloogun</div>
            </td>

            <td className="text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">femi555@gmail.com</div>
            </td>

            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text=sm">
                <a href = "#" className ="text-indigo-600 hover:text-red-800 px-4 ">Edit</a>
                <a
                onClick={(e, id) => deleteEmployee(e, employee.id)}
                href = "#" className ="text-indigo-600 hover:text-red-800 hover:cursor-pointer">Delete</a>
            </td>
    </tr>
  )
}

export default Employee