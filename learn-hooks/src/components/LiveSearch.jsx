import React, {useCallback, useEffect, useMemo, useState} from 'react'

export const LiveSearch = () => {
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
    }, []);

    const filteredUsers = useMemo(() => {
        return users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, users]);

    const handleSearch = useCallback((e) => {
        setQuery(e.target.value);
    }, []);

  return (
    <div>
        <h2>Live Search</h2>
        <input type='text' value={query} onChange={handleSearch} placeholder='Search Users...'/>
        <ul>
            {filteredUsers?.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default LiveSearch;