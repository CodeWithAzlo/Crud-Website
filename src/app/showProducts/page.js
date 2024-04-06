'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import "./table.css";
import DeleteProduct from "@/lib/DeleteProduct";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
  data = await data.json();
  if (!data.success) {
    return data.result;
  } else {
    return [];
  }
};

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="product-title">PRODUCTS DATA</h1>
      {loading ? (
        <Loader /> 
      ) : (
        <table>
          <thead>
            <tr>
            <td>ADD</td>
              <td>NAME</td>
              <td>Price</td>
              <td>Color</td>
              <td>Company</td>
              <td>Category</td>
              <td>UPDATE</td>
              <td>DELETE DATA</td>
            </tr>
          </thead>
          <tbody>
            {products.map((item, ind) => (
              <tr key={ind}>
              <td><Link href={"/addproduct"}>Add Product</Link></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.color}</td>
                <td>{item.company}</td>
                <td>{item.category}</td>
                <td>
                <Link href={"/products/"+item._id}>EDIT</Link>
                </td>
                <td><DeleteProduct id={item._id}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link  href={"/addproduct"} className="add-product-link"> Go to Add Products...</Link>
    </div>
  );
}
