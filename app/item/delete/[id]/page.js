// app/item/create/page.js

"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

const DeleteItem = (context) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDesc] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/api/item/delete/${context.params.id}`, {
                    method:"DELETE",
                    headers: {
                        "Accept":"application/json",
                        "Content-Type":"application/json",
                        "Authorization":`Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        email: "dummy"
                    })
                });
            const jsonData = await response.json();
            alert(jsonData.msg);
        } catch (error) {
            alert("アイテム削除失敗");
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

    return(
        <div>
            <h1>アイテム削除</h1>
            <form onSubmit={handleSubmit}>
                <h2>{title}</h2>
                <h3>{price}</h3>
                <Image src={image} height={200} width={200} /><br/>
                <button>削除</button>
            </form>
        </div>
    )
}

export default DeleteItem;