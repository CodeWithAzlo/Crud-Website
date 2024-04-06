import { connectionSrt } from "@/lib/db";
import { product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Connect to MongoDB
        await mongoose.connect(connectionSrt);

        // Query data from the 'product' collection
        const data = await product.find();
        console.log(data);

        // Close MongoDB connection
        await mongoose.disconnect();

        // Return data in the response
        return NextResponse.json({ result: data });
    } catch (error) {
        // Handle any errors
        console.error("Error:", error);
        // Return an error response
        return NextResponse.error("An error occurred while fetching data.", 500); // 500 is the HTTP status code for Internal Server Error
    }
}


export async function POST(request){
    const payload = await request.json();
    if(!payload.name || !payload.price || !payload.color || !payload.company ||!payload.category){
        return NextResponse.json({result:"require field not found",success:false},{status:400})
    }
   await mongoose.connect(connectionSrt);
   let Product = new product(payload);
   const result = await Product.save();
   return NextResponse.json({result,success:true})
}

