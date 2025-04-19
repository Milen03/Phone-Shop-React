import request from "../utils/request.js"



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