import React, { useState } from 'react'

const App = () => {
  const [info, setInfo] = useState(undefined);
  const [id, setId] = useState("");
  const [err, setErr] = useState(false);




  async function dataFetch(e) {
    e.preventDefault();
    if (id < 1) {
      setErr(true);
      return;
    }
    try {
      const Response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const data = await Response.json();
      setErr(false)
      setInfo(data);
      setId("");
    }
    catch (err) {
      console.log(err)
    }

  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h3 >Fetching Data from API</h3>
      <form onSubmit={dataFetch}>
        <input type='number' value={id} onChange={(e) => setId(e.target.value)} placeholder='Search ID (eg:1,2,3..)' />
        <button type='submit' >Search</button>
      </form>
      {info && (
        <div className='list' >
          <table>
            <thead>
              <tr>
                <th>UserID</th>
                <td> {info.userId} </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Title</th>
                <td> {info.title}</td>
              </tr>
              <tr>
                <th>Completed</th>
                <td>{info.completed ? (<>Completed</>) : (<>In Progress</>)}</td>
              </tr>

            </tbody>
          </table>
        </div>
      )}
      {err && (<p>Please enter A Valid Id and try again.(Eg: 1,2,3,...)</p>)}
    </div>
  )
}

export default App