// app/api/item/readall/route.js

import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET(){
    try {
        await connectDB();
        const allItems = await ItemModel.find();
        return NextResponse.json({msg : "読み込み成功", allItems : allItems});
    } catch (error) {
        return NextResponse.json({msg : "読み込み失敗"});
    }
    
}