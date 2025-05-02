import { useState } from "react"
import { usePhones } from "../../api/phoneApi.js"
import CatalogItem from "./catalogItem/CatalogIdtem.jsx"



export default function Catalog() {
    const { phones } = usePhones()
    const [query,setQuery] = useState('')

    const filteredPhone = query
    ? phones.filter((phone)=>
    phone.brand.toLowerCase().includes(query.toLowerCase())
       )
       :phones

    if (!phones.length) {
        return <p className="text-white text-center mt-10">No cars available. </p>
    }
    return (

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
               <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
            <h2 className="sr-only">Products</h2>
            <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search by brand..."
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}

            />
            </div>
          </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {filteredPhone.map((phones) => <CatalogItem key={phones._id} {...phones} />)}
            </div>
        </div>

    )
}
