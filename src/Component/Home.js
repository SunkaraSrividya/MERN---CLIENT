import { useState } from "react"

export default function Home(){
    const [name,setName]=useState("");
    const[ShowName,setShowName]=useState("");
    const handleChange=(e)=>{setName(e.target.value);}
    const handleButton=()=>{
        setShowName(`welcome,${name}`);
    }
    return(
<div>
    <input type="text" placeholder="enter name" value={name} onChange={handleChange}/>
    <button className="bg-blue border border-1 w-10"
    onClick={handleButton}>Submit</button>
    <p>{ShowName}</p>
    </div>
    )
        
}