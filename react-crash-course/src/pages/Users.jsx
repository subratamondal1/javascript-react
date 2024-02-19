import { useParams } from "react-router-dom"
function Users ()
{
    const {username} = useParams()
    return (
        <h1 className="text-2xl text-fuchsia-600 font-bold text-center">{username}</h1>
    )
}

export default Users