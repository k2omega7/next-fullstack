// utils/useAuth.js

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { jwtVerify } from "jose"

const useAuth = () => {

    const [loginUserEmail, setLoginUserMEmail] = useState("")

    const router = useRouter()

    useEffect(() => {

        const checkToken = async() => {
            const token = localStorage.getItem("token")

            if(!token){
                router.push("/user/login")
            }
    
            try {
                const secretkey = new TextEncoder().encode("next-market-app-book");
                const decodedJwt = await jwtVerify(token, secretkey)
                setLoginUserMEmail(decodedJwt.payload.email)
            } catch (error) {
                alert("useAyth.js error")
            }
        }
        checkToken()        
    }, [router])

    return loginUserEmail
}

export default useAuth;