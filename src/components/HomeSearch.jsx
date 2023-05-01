"use client"
import {AiOutlineSearch} from "react-icons/ai";
import {BsFillMicFill} from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function HomeSearch() {  
    const router = useRouter();
    const[input, setInput] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?_searchTerm=${input}`);
    }
    return (
    <>
        <form onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
            <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
            <input type="text" className="flex-grow focus:outline-none" onChange={(e) => setInput(e.target.value)} value={input}/>
            <BsFillMicFill className="text-lg"/>
        </form>

        <div className="">
            <button onClick={handleSubmit}  className="btn">
                Google Search
            </button>
        </div>
    </>
  )
}
