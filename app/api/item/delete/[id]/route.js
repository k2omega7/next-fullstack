// app/api/delete/[id]/route.js

import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function DELETE(request, context){
    try {
        await connectDB();
        const singleItem = await ItemModel.findById("context.params.id");

        if(singleItem.email === reqBody.email){
            await ItemModel.deleteOne({_id : context.params.id}, reqBody);
            return NextResponse.json({msg : "削除成功"});
        }else{
            return NextResponse.json({msg : "ほかの人が作成したアイテムは削除できません"});
        }
    } catch (error) {
        return NextResponse.json({msg : "削除失敗"});
    }
}