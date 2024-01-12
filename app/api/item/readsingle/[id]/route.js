// app/api/item/readsingle/[id]/route.js
// app/api/item/readall/route.js

import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET(request, context){
    try {
        await connectDB();
        const singleItem = await ItemModel.findById(context.params.id);
        return NextResponse.json({msg : "単体読み込み成功", singleItem : singleItem });
    } catch (error) {
        return NextResponse.json({msg : "単体読み込み失敗"});
    }

}