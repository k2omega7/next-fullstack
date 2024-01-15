// api/user/register/route.js

import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";

export async function POST(request){

    const reqBody = await request.json();

    try {
        await connectDB();
        await UserModel.create(reqBody);
        return NextResponse.json({msg : "ユーザ登録成功"});
    } catch (error) {
        return NextResponse.json({msg : "ユーザ登録失敗"});
    }

}