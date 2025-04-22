import { usePhones } from "../../api/phoneApi.js"
import CatalogItem from "./catalogItem/CatalogIdtem.jsx"


  
  export default function Catalog() {
    const { phone } = usePhones()

if(!phone.length){
    return <p className="text-white text-center mt-10">No cars available. </p>
}
    return (
     
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {phone.map((phones) => <CatalogItem key={phones._id} {...phones}/>)}
          </div>
        </div>

    )
  }
  