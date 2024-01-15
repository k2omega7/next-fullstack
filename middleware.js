// middleware.js

import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request){

    const token = await request.headers.get("Authorization")?.split(" ")[1];

    if(!token){
        return NextResponse.json({msg: "tokenが見つかりません"});
    }

    try {
        const secretkey = new TextEncoder().encode("next-market-app-book");
        const decodeJwt = await jwtVerify(token, secretkey);
        return NextResponse.next();
    } catch (error) {
        console.log(token);
        return NextResponse.json({msg: "再ログインしてください", token: token});
    }


}

// middleware.jsの適応範囲
export const config = {
    matcher: [
        "/api/item/create",
        "/api/item/update/:path*",
        "/api/item/delete/:path*",
    ]
};