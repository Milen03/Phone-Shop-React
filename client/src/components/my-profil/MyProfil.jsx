import { useContext } from "react"
import { UserContext } from "../../context/userContext.js"
import { usePhones } from "../../api/phoneApi.js"

import MyProfileItem from "./myProfileItem/MyProfileItem.jsx"

import {  useLikesByUser } from "../../api/likeApi.js"


  
export default function MyProfile() {
  const { _id: userId, email } = useContext(UserContext);
  const { phones } = usePhones();
 
 

  // твоите телефони
  const myPhone = phones.filter(p => p._ownerId === userId);
 // твоите харесвания
  const { likes } = useLikesByUser(userId);

  const likedPhoneIds = likes.map(l => l.phoneId);
  const likedPhones = phones.filter(p => likedPhoneIds.includes(p._id));

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


      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-gray-100">
          My Likes 
        </h2>
        {likedPhones.length 
          ? (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {likedPhones.map(phone => (
                <MyProfileItem key={phone._id} {...phone} />
              ))}
            </div>
          )
          : (
            <p className="text-white text-center mt-10">
              You do not have a like phone.
            </p>
          )
        }
      </section>

     
    </div>
  );
}
