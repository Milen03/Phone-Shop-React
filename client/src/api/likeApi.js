import { useEffect, useState } from "react"
import request from "../utils/request.js"
import useAuth from "../hooks/useAuth.js";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/likes`

export const useLike = (phoneId,userId,accessToken) =>{

    const [likes,setLikes] = useState([])
    const[liked,setLiked] = useState(false)

    

    const fetchLikes = () => {
        request.get(`${baseUrl}?where=phoneId%3D%22${phoneId}%22`)
            .then((data) => {
                setLikes(data);
                setLiked(data.some((like) => like._ownerId === userId));
            })
            .catch(console.error);
    };

    useEffect(fetchLikes, [phoneId, userId]);

    const addLike = async () => {
        if (!liked) {
            try {
                const newLike = await request.post(baseUrl, { phoneId }, {
                    headers: { "Content-Type": "application/json", 
                      "X-Authorization": accessToken }
                });
                setLikes([...likes, newLike]);
                setLiked(true);
            } catch (error) {
                console.error(error);
            }
        }
    };


    return { 
        likesCount: likes.length, 
        liked, 
        addLike,
      };
}

export function useLikesByUser(userId) {
    const [likes, setLikes] = useState([]);

    const { request } = useAuth()
  
    useEffect(() => {
      if (!userId) return;
      request.get(
        `${baseUrl}?where=_ownerId%3D%22${userId}%22`)
      .then(setLikes)
      .catch(console.error);
    }, [userId]);
  
    return { likes };
  }