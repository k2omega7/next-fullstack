// app/api/delete/[id]/route.js

import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function DELETE(request, context){
    try {
        await connectDB();
        await ItemModel.deleteOne({_id : context.params.id});
        return NextResponse.json({msg : "削除成功"});
    } catch (error) {
        return NextResponse.json({msg : "削除失敗"});
    }
}