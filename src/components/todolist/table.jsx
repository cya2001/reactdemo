import React from 'react'

export default function TodoTable(props) {
  const todolist = props.task;
  const toggleTaskStatus = props.toggleTaskStatus;
  const tableHeader = ['id', 'task', 'flag'];
  return (
    <div>
      TodoTable
      <table style={{display: 'flex',  alignItems: 'center', 
        textAlign: 'center',flexDirection:'column'}}>
        <thead>
        <tr>
            {tableHeader.map((header, index) => (
              <th key={index} scope="col">
                {header.toLocaleUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            todolist.map((item,index)=>(
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.task}</td>
                <td>{item.flag.toString()}</td>
                <td>
                  <button
                  // onClick={toggleTaskStatus(item.id)}
                  onClick={()=>{toggleTaskStatus(item.id)}}
                  >
                  {item.flag ? 'Completed' : 'Not Completed'}
                  </button>                  
                </td>

              </tr>          
            )
           )
          }
        </tbody>

      </table>
    </div>
  );
}