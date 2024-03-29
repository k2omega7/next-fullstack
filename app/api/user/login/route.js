// api/user/login/route.js

import { SignJWT } from "jose";
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
                // シークレットキー生成
                const secretkey = new TextEncoder().encode("next-market-app-book");
                // ペイロード生成
                const payload = {
                    email: reqBody.email
                };
                // トークン発行
                const token = await new SignJWT(payload)
                                        .setProtectedHeader({alg: "HS256"})
                                        .setExpirationTime("1d")
                                        .sign(secretkey);
                console.log(token);
                return NextResponse.json({msg : "ログイン成功", token: token});
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