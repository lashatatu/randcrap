import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const fetchApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchApi('https://jsonplaceholder.typicode.com/todos');
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
