// app/register/page.js

"use client";
import { useState } from "react";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/user/register", {
                method:"POST",
                headers: {
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                })
            });
            const jsonData = await response.json();
            alert(jsonData.msg);
        } catch (error) {
            alert("ユーザ登録失敗");
            console.log(error);
        }
    };

    return(
        <div>
            <h1>ユーザ新規登録</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={(e) => {setName(e.target.value);}}
                    type="text"
                    name="name"
                    placeholder="name"
                    required 
                /><br/>
                <input
                    value={email}
                    onChange={(e) => {setEmail(e.target.value);}}
                    type="text"
                    name="email"
                    placeholder="email"
                    required
                /><br/>
                <input
                    value={password}
                    onChange={(e) => {setPassword(e.target.value);}}
                    type="text"
                    name="password"
                    placeholder="password"
                    required
                /><br/>
                <button>登録</button>
            </form>
        </div>
    );
};

export default Register;