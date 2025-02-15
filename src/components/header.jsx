import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[100px] shadow-xl
        flex justify-center relative">
            <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] 
            object-cover absolute left-1 border-[4px]
            border-white rounded-full"/>
            <Link to="/" className="text-[25px]
            font-bold m-1">Home</Link>
            <Link to="/" className="text-[25px]
            font-bold m-1">Contact</Link>
            <Link to="/" className="text-[25px]
            font-bold m-1">Gallery</Link>
            <Link to="/" className="text-[25px]
            font-bold m-1">Items</Link>
        </header>
    )
}