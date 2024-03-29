import { useEffect, useState } from "react"


export default function Example(){
    const [count, setCount] = useState(0)
    const [isActive, setIsActive] = useState(false)

    function handleIncrement(){
        setCount(count + 1)
    }

    function handleActive(){
        setIsActive(!isActive);
    }

    useEffect(() => {
         for(let i= 0; i < count; i++){
            console.log("counter:",i)
         }

         console.log("isActive:",isActive)
         console.log("count:",count)
    },[count,isActive])

    return (
        <>
        <div className="bg-white w-[400px] h-[200px] p-4 mt-10">
            <h1>Counter app</h1>
            <p>Count: {count} </p>
            <button className="bg-black p-2 text-white" onClick={handleIncrement}>Increment</button>
            <button className="bg-black p-2 text-white" onClick={handleActive}>Active</button>
        </div>
        </>
    )
}