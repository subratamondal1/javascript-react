import { useState } from "react"

function Counter ( { count } )
{
    const [counter, changeCount] = useState( count )
    return <div className="flex justify-center items-center text-5xl space-x-4">
        <button
            className="p-4 border-2 border-blue-600 rounded-full"
            onClick={()=>changeCount((count)=>count-1)}
        >-</button>
        <h1>{ counter }</h1>
        <button
            className="p-4 border-2 border-blue-600 rounded-full"
            onClick={()=>changeCount((count)=> count+1)}
        >+</button>
    </div>
}

export default Counter