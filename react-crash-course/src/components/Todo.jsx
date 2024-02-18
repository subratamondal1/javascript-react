function Todo ( { title, paragraph } )
{
    function deleteTodo (title)
    {
        console.log("Delete: ",title)
    }
    return <div className="border-2 border-black p-8 w-[calc(100%/2.5)] m-2">
        <h2 className='text-xl font-semibold'>{ title }</h2>
        <p>{ paragraph }</p>
        <button
            onClick={() => deleteTodo(title)}
            className="border-2 border-blue-700 px-4 py-2 rounded-3xl my-4"
        >Delete</button>
        </div>
}

export default Todo