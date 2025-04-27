import { Link } from "react-router";

export default function MyProfileItem({
    _id, 
    imageUrl,
    brand,
    model,
    price
}){



    return(
        <>
           <div key={_id} className="group relative">
                <img
                  src={imageUrl}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-100">
                      <Link to={`/phone/${_id}/details`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {brand}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">{model}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-100">{price}</p>
                </div>
              </div>
        </>
    )
}