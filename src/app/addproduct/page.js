'use client'
import { useState } from 'react'
import '../style.css'
import Link from 'next/link';
import { useRouter } from "next/navigation";
export default function Page(){
    const router = useRouter();
    const [name,setName]= useState("");
    const [price,setPrice]= useState("");
    const [color,setColor]= useState("");
    const [company,setCompany]= useState("");
    const [category,setCategory]= useState("");

    const addProduct= async ()=>{
        console.log(name,price,color,company,category);
        let result = await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,color,company,category})
        });
        result = await result.json();
        if(result.success){
            alert("new product addded");

        }else{
            alert("error check some error user not created")
        }
        router.push("/showProducts");
    }

    return(
        <div>
        
        <h1 className='update-tag'>ADD PRODUCT PAGE</h1>
        <input className='input' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='ENTER THE PRODUCT NAME' />
        <input className='input' value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder='ENTER THE PRODUCT PRICE' />
        <input className='input' value={color} onChange={(e)=>setColor(e.target.value)} type="text" placeholder='ENTER THE PRODUCT COLOR' />
        <input className='input' value={company} onChange={(e)=>setCompany(e.target.value)} type="text" placeholder='ENTER THE PRODUCT COMPANY' />
        <input className='input' value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder='ENTER THE PRODUCT CATEGORY' />
        <button onClick={addProduct} className='btn'>ADD PRODUCT</button>
        <Link href={"/showProducts"}  className='linkage'> Go to the products UI</Link>
        
        
        </div>
    )
}