import { useState } from "react"

function Counter ( { count } )
{
    const [arr, setArr] = useState( [] )
    function addPlus ()
    {
        setArr((prevArr) => [...prevArr, "+"])
    }
    function addMinus(){
        setArr((prevArr)=> [...prevArr, "-"])
    }

    return <div className="flex justify-center items-center text-5xl space-x-4">
        <button
            className="p-4 border-2 border-blue-600 rounded-full"
            onClick={addMinus}
        >-</button>
        <h1>{ arr }</h1>
        <button
            className="p-4 border-2 border-blue-600 rounded-full"
            onClick={addPlus}
        >+</button>
    </div>
}

export default Counter