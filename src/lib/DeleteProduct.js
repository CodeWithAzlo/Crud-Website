"use client"
import './delete.css'

import { useRouter } from "next/navigation";



export default function DeleteProduct(props){
    const router = useRouter();
const deleteRecord=async()=>{
    let response = await fetch("http://localhost:3000/api/products/"+props.id,{
        method:"delete",
    });

    response = await response.json();
    if(response.success){
        alert("PRODUCT IS DELETED");
        router.push("/showProducts")
    }
}
    console.log(props.id)
    return (
        <>
        <button onClick={deleteRecord}>DELETE</button>
        </>
    )
}