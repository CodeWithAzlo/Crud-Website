'use client'
import { useEffect, useState } from 'react'
import '../../style.css'
import Link from 'next/link';
export default function Page(props){
    const [name,setName]= useState("");
    const [price,setPrice]= useState("");
    const [color,setColor]= useState("");
    const [company,setCompany]= useState("");
    const [category,setCategory]= useState("");
useEffect(()=>{
getProductDetail();
},[]);

const getProductDetail= async()=>{
    let productId = props.params.editproduct;
    let productData = await fetch("http://localhost:3000/api/products/"+productId)
    productData = await productData.json();
    if(productData.success){
        // object destruchring learnt from baijan.....
      let result = productData.result;
        setName(result.name);
        setPrice(result.price);
        setColor(result.color);
        setCompany(result.company);
        setCategory(result.category);
    }
    console.log(productData);
}
    const updateProduct= async()=>{
        let productId = props.params.editproduct;
        let data = await fetch("http://localhost:3000/api/products/"+productId,{
            method:"PUT",
            body:JSON.stringify({name,price,color,company,category})
        });
  data = data.json();
  if(!data.result){
    alert("PRODUCT HAS BEEN UPDATED IN THE DB");
  }
    }

    return(
        <div>
        
        <h1 className='update-tag'>UPDATE PRODUCT PAGE</h1>
        <input className='input' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='ENTER THE PRODUCT NAME' />
        <input className='input' value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder='ENTER THE PRODUCT PRICE' />
        <input className='input' value={color} onChange={(e)=>setColor(e.target.value)} type="text" placeholder='ENTER THE PRODUCT COLOR' />
        <input className='input' value={company} onChange={(e)=>setCompany(e.target.value)} type="text" placeholder='ENTER THE PRODUCT COMPANY' />
        <input className='input' value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder='ENTER THE PRODUCT CATEGORY' />
        <button onClick={updateProduct}  className='btn'>UPDATE PRODUCT</button>
        <Link href={"/showProducts"} className='linkage'> Go to the products UI</Link>
        
        
        </div>
    )
}