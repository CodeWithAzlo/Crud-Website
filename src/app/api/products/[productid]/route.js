import { connectionSrt } from "@/lib/db";
import { product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  try {
    const productId = content.params.productid;
    const filter = { _id: productId };
    const payload = await request.json();
    
    await mongoose.connect(connectionSrt, { useNewUrlParser: true, useUnifiedTopology: true });
    const result = await product.findOneAndUpdate(filter, payload, { new: true });
    
    return NextResponse.json({ result, success: true }, { status: 200 });

  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.error(new Error("Error updating product"), { status: 500 });

  }
}


export async function GET(request, content) {
  try {
    const productId = content.params.productid;
    const record = { _id: productId };
    
    await mongoose.connect(connectionSrt, { useNewUrlParser: true, useUnifiedTopology: true });
    const result = await product.findById(record);
    
    return NextResponse.json({ result, success: true }, { status: 200 });

  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.error(new Error("Error updating product"), { status: 500 });

  }
}


export async function DELETE(request , content){
  const productId = content.params.productid;
  const record = {_id:productId}
  await mongoose.connect(connectionSrt);
  const result = await product.deleteOne(record);
  return NextResponse.json({result, success:true})

}