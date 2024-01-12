// app/api/create/route.js

import { NextResponse } from "next/server";

export async function POST(request){
    console.log(await request.json());
    return NextResponse.json({msg : "アイテム作成"});
}