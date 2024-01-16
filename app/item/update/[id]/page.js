// app/item/create/page.js

"use client"

import { useState, useEffect } from "react";
import useAuth from "@/app/utils/useAuth";

const UpdateItem = (context) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDesc] = useState("");
    const [email, setEmail] = useState("");
    const loginUserEmail = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/api/item/update/${context.params.id}`, {
                    method:"POST",
                    headers: {
                        "Accept":"application/json",
                        "Content-Type":"application/json",
                        "Authorization":`Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        title: title,
                        price: price,
                        image: image,
                        description: description,
                        email: loginUserEmail
                    })
                });
            const jsonData = await response.json();
            alert(jsonData.msg);
        } catch (error) {
            alert("アイテム編集失敗");
                console.log(error);
        }
    }

    // 特定のタイミングで実行
    useEffect(() => {
        const getSingleItem = async(id) => {
            const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`, {cache:"no-cache"});
            const jsonData = await response.json();
            const singleItem = jsonData.singleItem;
            setTitle(singleItem.title);
            setPrice(singleItem.price);
            setImage(singleItem.image);
            setDesc(singleItem.description);
            setEmail(singleItem.email);         
        };
        getSingleItem(context.params.id);
    },[context]);

    if(loginUserEmail === email){
        return(
            <div>
                <h1>アイテム編集</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        type="text"
                        name="title"
                        placeholder="アイテム名" required
                    /><br/>
                    <input
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        type="text"
                        name="price"
                        placeholder="設定価格" required
                    /><br/>
                    <input
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                        type="text"
                        name="image"
                        placeholder="画像" required
                        /><br/>
                    <textarea
                        value={description}
                        onChange={(e)=>setDesc(e.target.value)}
                        type="text"
                        name="description"
                        row={15} placeholder="説明文" required
                    /><br/>
                    <button>編集</button>
                </form>
            </div>
        )
    }else{
        return <h1>権限がありません</h1>
    }
}

export default UpdateItem;