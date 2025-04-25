import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth.js"
import request from "../utils/request.js"



const baseUrl = 'http://localhost:3030/data/phone'


export const useCreateCar = () => {

    const { request } = useAuth()

    const create = async (phoneData) => {

        try {
            return await request.post(baseUrl, phoneData)
        } catch (err) {
            alert("Phone creation failed: " + err.message);

        }
    }

    return {
        create
    }

}


export const usePhones = () => {
    const [phone, setPhone] = useState([])

    useEffect(() => {
        request.get(baseUrl)
            .then(setPhone)
    }, [])

    return {
        phone
    }
}

export const usePhone = (phoneId) => {
    const [phone, setPhone] = useState({})

    useEffect(() => {
        request.get(`${baseUrl}/${phoneId}`)
            .then(setPhone)

    }, [phoneId])

    return {
        phone
    }
}


export const useDelete = () => {
    const { request } = useAuth()

    const deletePhone = (phoneId) => {
        request.delete(`${baseUrl}/${phoneId}`)
    }

    return {

        deletePhone
    }
}

export const useEditPhone = () => {
    const { request } = useAuth()

    const edit = async (phoneId, phoneData) => {
        try {
            return await request.put(`${baseUrl}/${phoneId}`, { ...phoneData, _id: phoneId })
        } catch (err) {
            alert("Phone update failed: " + error.message);
        }
    }

    return {
        edit
    }
}