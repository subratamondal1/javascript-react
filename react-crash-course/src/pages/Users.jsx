import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function Users ()
{
    const { id } = useParams()
    const [users, setUsers] = useState( {} )

    async function fetchUser ()
    {
        const { data } = await axios.get( `https://jsonplaceholder.typicode.com/users/${id}` )
        setUsers(data)
    }

    useEffect( () =>
    {
        fetchUser()
    }, [])
    
    return (
        <h1 className="text-2xl text-fuchsia-600 font-bold text-center">{id}</h1>
    )
}

export default Users