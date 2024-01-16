// app/item/create/page.js

"use client"

import { useState } from "react";
import useAuth from "@/app/utils/useAuth";

const CreateItem = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDesc] = useState("");
    const loginUserEmail = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/item/create", {
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
            alert("アイテム作成失敗");
                console.log(error);
        }
    }

    if(loginUserEmail){
    return(
        <div>
            <h1>アイテム作成</h1>
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
                <button>作成</button>
            </form>
        </div>
    )}
}

export default CreateItem;