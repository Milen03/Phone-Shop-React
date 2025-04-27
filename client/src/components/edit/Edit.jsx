
import { useEditPhone, usePhone } from "../../api/phoneApi.js"
import { Link, useNavigate ,useParams} from 'react-router'
import { ChevronDownIcon } from '@heroicons/react/16/solid'


export default function Edit(){

    const navigate = useNavigate()
    const { phoneId } = useParams()
    const { phone } = usePhone(phoneId)
    const { edit } = useEditPhone()

    const formAction = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const phoneData = Object.fromEntries(formData)

        await edit(phoneId,phoneData)

        navigate(`/phone/${phoneId}/details`)
    }


    return(
    <>
    <div className="relative z-10 p-8">
     <form onSubmit={formAction}>
         <div className="space-y-12">
             {/* Personal Information Section */}
             <div className="border-b border-gray-600/10 pb-12">
                 <div className="mt-20">
                     <h2 className="text-base font-semibold text-white">Phone Information</h2>
                     <p className="mt-1 text-sm text-gray-400">Here you need to fill in the details for your phone</p>
                 </div>

                 <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                     <div className="sm:col-span-3">
                         <label htmlFor="brand" className="block text-sm font-medium text-white">
                             Brand
                         </label>
                         <div className="mt-2">
                             <input
                                 id="brand"
                                 name="brand"
                                 type="text"
                                 className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                 defaultValue={phone.brand}
                             />
                         </div>
                     </div>

                     <div className="sm:col-span-3">
                         <label htmlFor="model" className="block text-sm font-medium text-white">
                             Model
                         </label>
                         <div className="mt-2">
                             <input
                                 id="model"
                                 name="model"
                                 type="text"
                                 className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                 defaultValue={phone.model}
                             />
                         </div>
                     </div>

                     <div className="sm:col-span-3">
                         <label htmlFor="model" className="block text-sm font-medium text-white">
                             Color
                         </label>
                         <div className="mt-2">
                             <input
                                 id="color"
                                 name="color"
                                 type="text"
                                 className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                 defaultValue={phone.color}
                             />
                         </div>
                     </div>



                  
                     <div className="sm:col-span-3">
                         <label htmlFor="price" className="block text-sm font-medium text-white">
                             Price
                         </label>
                         <div className="mt-2">
                             <input
                                 id="price"
                                 name="price"
                                 type="number"
                                 className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                 defaultValue={phone.price}
                             />
                         </div>
                     </div>

                     <div className="sm:col-span-3">
                         <label htmlFor="price" className="block text-sm font-medium text-white">
                         Internal memory:
                         </label>
                         <div className="mt-2">
                             <input
                                 id="memory"
                                 name="memory"
                                 type="number"
                                 className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                 defaultValue={phone.memory}
                             />
                         </div>
                     </div>

                     <div className="sm:col-span-3">
                         <label htmlFor="price" className="block text-sm font-medium text-white">
                         RAM:
                         </label>
                         <div className="mt-2">
                             <input
                                 id="ram"
                                 name="ram"
                                 type="number"
                                 className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                 defaultValue={phone.ram}
                             />
                         </div>
                     </div>
                       
                       {phone['Operating-system'] &&
                       
                     <div className="sm:col-span-3">
                         <label htmlFor="Operating-system" className="block text-sm font-medium text-white">
                         Operating system
                         </label>
                         <div className="mt-2 grid grid-cols-1">
                             <select
                                 id="Operating-system"
                                 name="Operating-system"
                                 autoComplete="country-name"
                                 defaultValue={phone['Operating-system']}
                                 className="col-start-1 row-start-1 w-90 appearance-none rounded-md bg-gray-900 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                             >
                                 <option>iOS</option>
                                 <option>Android</option>

                             </select>
                             <ChevronDownIcon
                                 aria-hidden="true"
                                 className="pointer-events-none col-start-1 row-start-1 mr-2 w-5 h-5 self-center justify-self-end text-gray-500 sm:w-4 sm:h-4"
                             />
                         </div>
                     </div>
                     }


                     <div className="col-span-full">
                         <label htmlFor="street-address" className="block text-sm font-medium text-white">
                             imageUrl
                         </label>
                         <div className="mt-2">
                             <input
                                 id="imageUrl"
                                 name="imageUrl"
                                 type="text"
                                 className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                 defaultValue={phone.imageUrl}
                             />
                         </div>
                     </div>
                 </div>
             </div>
             {/* Profile Section */}
             <div className="border-b border-gray-600/10 pb-10">
                 <h2 className="text-base font-semibold text-white">For connection</h2>
                 <p className="mt-1 text-sm text-gray-400">
                     These fields for contact with you and more information about the phone
                 </p>

                 <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                     <div className="col-span-full">
                         <label htmlFor="street-address" className="block text-sm font-medium text-white">
                             Phone number
                         </label>
                         <div className="mt-2">
                             <input
                                 id="phoneNumber"
                                 name="phoneNumber"
                                 type="number"
                                 className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                 defaultValue={phone.phoneNumber}
                             />
                         </div>
                     </div>

                     <div className="col-span-full">
                         <label htmlFor="street-address" className="block text-sm font-medium text-white">
                             Address
                         </label>
                         <div className="mt-2">
                             <input
                                 id="address"
                                 name="address"
                                 type="text"
                                 className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                 defaultValue={phone.address}
                             />
                         </div>
                     </div>

                     <div className="col-span-full">
                         <label htmlFor="about" className="block text-sm font-medium text-white">
                             About
                         </label>
                         <div className="mt-2">
                             <textarea
                                 id="about"
                                 name="about"
                                 rows={3}
                                 className="block w-full rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                 defaultValue={phone.about}
                             />
                         </div>

                     </div>

                 </div>
             </div>

         </div>

         <div className="mt-6 flex items-center justify-end gap-x-6">
             <Link to="/" className="text-sm font-semibold text-white">
                 Cancel
             </Link>

             <button
                 type="submit"
                 className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
                 Save
             </button>
         </div>
     </form>
 </div>

    </>
)
}