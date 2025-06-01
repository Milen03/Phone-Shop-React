import { Link } from "react-router";

export default function CatalogItem ({
    _id, 
    imageUrl,
    brand,
    model,
    price
}){

    return(
        <>
         <Link to={`/phone/${_id}/details`} className="group">
                <img
                  src={imageUrl}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h2 className="mt-4 text-xl text-gray-300">{brand} </h2>
                <h3 className="mt-4 text-sm text-gray-300">{model}</h3>
                <p className="mt-1 text-lg font-medium text-gray-300">{price} LV</p>
              </Link>
        </>
    )
}