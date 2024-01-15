// api/user/login/route.js

import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";

export async function POST(request){
    const reqBody = await request.json();

    try {
        await connectDB();
        const savedUserData = await UserModel.findOne({email: reqBody.email});
        if(savedUserData){
            if(reqBody.password === savedUserData.password){
                return NextResponse.json({msg : "ログイン成功"});
            }else{
                return NextResponse.json({msg : "パスワードが違います"});
            }
        }else{
            return NextResponse.json({msg : "ログイン失敗：ユーザ未登録！"});
        }
    } catch (error) {
        return NextResponse.json({msg : "ログイン失敗"});
    }
}