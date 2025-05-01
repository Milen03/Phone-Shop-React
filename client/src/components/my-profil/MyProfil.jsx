import { useContext } from "react"
import { UserContext } from "../../context/userContext.js"
import { usePhones } from "../../api/phoneApi.js"
import { useParams } from "react-router"
import MyProfileItem from "./myProfileItem/MyProfileItem.jsx"
import useAuth from "../../hooks/useAuth.js"
import { useLike } from "../../api/likeApi.js"


  
export default function MyProfile() {
  const { _id: userId, email } = useContext(UserContext);
  const { phone } = usePhones();
  const { phoneId } = useParams(); 
  const { accessToken } = useAuth();
  const { likes } = useLike(phoneId, userId, accessToken);

  // твоите телефони
  const myPhone = phone.filter(p => p._ownerId === userId);

  const likedPhones = phone.filter(p =>
    likes.some(like => like.phoneId === p._id)
  )


  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-gray-100">
          My Profile ({email})
        </h2>
        {myPhone.length 
          ? (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {myPhone.map(phone => (
                <MyProfileItem key={phone._id} {...phone} />
              ))}
            </div>
          )
          : (
            <p className="text-white text-center mt-10">
              You do not have a published phone.
            </p>
          )
        }
      </section>

     
    </div>
  );
}
