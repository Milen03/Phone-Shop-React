import { useContext, useEffect } from "react"
import request from "../utils/request.js"
import { UserContext } from "../context/userContext.js"



const baseUrl = 'http://localhost:3030/users'

export const useRegister = () => {

    const register = async (email, password) => {
        try {
            const result = await request.post(`${baseUrl}/register`, { email, password })
            return result
        } catch (err) {
            alert("Registration failed: " + err.message);
        }
    }

    return {
        register
    }

   
}
export const useLogin = () => {
    const login = async (email,password) =>{
        try{
            const result = await request.post(`${baseUrl}/login`,{email,password})
            return result
        }catch(err){
            alert("Login failed: " + error.message);
        }
    }

    return{
        login
    } 
}


export const useLogout = () =>{
    const {accessToken,userLogoutHandeler} = useContext(UserContext)

    useEffect(()=>{
        if(!accessToken){
            return
        }

        const option = {
            headers: {
                'X-Authorization': accessToken,
                ...option.headers
            }    
        }
        request.get(`${baseUrl}/logout`,null,option)
            .then(userLogoutHandeler({}));
    },[accessToken,userLogoutHandeler])

    return {
        isLoggedOut: !!accessToken,
    }
}
