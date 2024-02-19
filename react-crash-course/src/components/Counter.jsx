import { useState } from "react"

function Counter ( { count } )
{
    const [cart, setCart] = useState({"item":"Apple", "quantity":0})
    function addApple ()
        // How to use 'object' in the React Hooks
        // 1. Use a Callback to get the previous value
        // 2. Spread out all the properties of the previous state
        // 3. Only change the property you need to change
    {
        setCart( prevCart =>
        ({
            ...prevCart,
            "quantity": prevCart.quantity + 1
        }))
    }

    function removeApple ()
    {
        setCart( prevCart => (
            {
                ...prevCart,
                "quantity": prevCart.quantity - 1
            }
        ))
    }

    return <div className="flex justify-center items-center text-5xl space-x-4">
        <button
            className="p-4 border-2 border-blue-600 rounded-full"
            onClick={removeApple}
        >-</button>
        <h1>{ cart.quantity } { cart.item }</h1>
        <button
            className="p-4 border-2 border-blue-600 rounded-full"
            onClick={addApple}
        >+</button>
    </div>
}

export default Counter