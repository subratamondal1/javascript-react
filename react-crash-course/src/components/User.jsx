function User ({id, name, email, username})
{
    return (
        <div className="border-2 border-green-600 rounded-lg justify-center items-center p-8 m-8">
            <div>ID: {id} </div>
            <div>NAME: {name}</div>
            <div>EMAIL: {email}</div>
            <div>USERNAME: {username}</div>
        </div>
    )
}

export default User