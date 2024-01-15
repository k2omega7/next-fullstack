// api/item/update/[id]/route.js

import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function PUT(request, context){
    const reqBody = await request.json();
    try {
        await connectDB();
        await ItemModel.updateOne({_id : context.params.id}, reqBody);
        return NextResponse.json({msg : "更新成功"});
    } catch (error) {
        return NextResponse.json({msg : "更新失敗"});
    }

}