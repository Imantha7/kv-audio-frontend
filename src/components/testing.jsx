import { useState } from "react"

export default function Testing(){
    const [count , setCount] = useState(0);
    const [itemName , setItemName] = useState("Coconut");

    return(
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <div className="text-7xl">{count} {itemName}</div>
            <button onClick={()=>{
                const newCount = count + 1;
                setCount(newCount)
            }} className="w-[150px] h-[60px] bg-black text-white text-4xl rounded-4xl mt-3">Count</button>
            <div className="mt-3 space-x-2">
                <button className="w-[150px] h-[60px] bg-black text-white text-3xl rounded-4xl"
                onClick={()=>{
                    setItemName("Coconut")
                }}
                >Coconut</button>
                <button className="w-[150px] h-[60px] bg-black text-white text-3xl rounded-4xl"
                onClick={()=>{
                    setItemName("Banana")
                }}
                >Banana</button>
                <button className="w-[150px] h-[60px] bg-black text-white text-3xl rounded-4xl"
                onClick={()=>{
                    setItemName("Apple")
                }}
                >Apple</button>
                <button className="w-[150px] h-[60px] bg-black text-white text-3xl rounded-4xl"
                onClick={()=>{
                    setItemName("Other")
                }}
                >Other</button>
            </div>
        </div>
    )
}