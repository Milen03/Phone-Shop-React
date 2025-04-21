import useAuth from "../hooks/useAuth.js"



const baseUrl = 'http://localhost:3030/data/phone'


export const useCreateCar = () =>{

const { request } = useAuth()

const create = async (phoneData) =>{

    try{
return await request.post(baseUrl,phoneData)
    }catch(err){
        alert("Phone creation failed: " + err.message);

    }
}

return{
    create
}

}