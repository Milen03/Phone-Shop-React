'use client'

import { useState } from 'react'
import { Link, useNavigate, useParams } from "react-router"
import useAuth from "../../hooks/useAuth.js"
import { useDelete, usePhone } from '../../api/phoneApi.js'
import { useLike } from '../../api/likeApi.js'




export default function Details() {
  const navigation = useNavigate()
  const { email, _id: userId, accessToken } = useAuth()
  const { phoneId } = useParams()
  const { phone } = usePhone(phoneId)
  const { deletePhone } = useDelete()

  const phoneDeleteHendeler = async () =>{
    const hasConfirm = confirm(`Are you sure you want to delete ${phone.brand} Car?`)

    if(!hasConfirm){
      return
    }

    await deletePhone(phoneId)

    navigation('/phone/catalog')
  }
  const { likesCount, liked, addLike } = useLike (phoneId, userId, accessToken);


  const isOwner = userId === phone._ownerId

  return (
    <div className="pt-6">
    {/* Image gallery */}
    <div className="mx-auto mt-20 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8"></div>
      <img
        src={phone.imageUrl}
        alt={`${phone.brand} ${phone.model}`}
        className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
      />
    </div>

    {/* Product info */}
    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div className="lg:col-span-2 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {phone.brand} {phone.model}
        </h1>
      </div>

      {/* Actions */}
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <p className="text-3xl tracking-tight text-white">{phone.price} LV</p>
        <form className="mt-10">
          {isOwner && (
            <>
              <Link
                to={`/phone/${phoneId}/edit`}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={phoneDeleteHendeler}
                className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Delete
              </button>
            </>
          )}

<h1>Likes: {likesCount}</h1>
              {email && (
                <>
                  
                  {!isOwner && !liked && (
                    <button
                      type="button"
                      onClick={addLike}
                      className="mt-10 flex w-full items-center justify-center rounded-md bg-cyan-500 px-8 py-3 text-base font-medium text-white hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Like
                    </button>
                  )}
                  {liked && <p>You have liked this phone</p>}
                </>
              )}
        </form>
      </div>

      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pr-8 lg:pb-16">
        <div className="mt-10">
          <h3 className="text-sm font-medium text-white">For Phone</h3>
          <div className="mt-4">
            <ul role="list" className="list-disc space-y-2 pl-4 text-sm text-gray-300">
              <li>Memory: {phone.memory} GB</li>
              <li>Operating-system: {phone['Operating-system']}</li>
              <li>RAM: {phone.ram} GB</li>
              <li>Color: {phone.color}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-medium text-white">Contact details and address</h2>
          <div className="mt-4">
            <ul role="list" className="list-disc space-y-2 pl-4 text-sm text-gray-300">
              <li>Phone Number: {phone.phoneNumber}</li>
              <li>Address: {phone.address}</li>
            </ul>
          </div>
          <div className="mt-4 space-y-6">
            <p className="text-sm text-white">{phone.about}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
