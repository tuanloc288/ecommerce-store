import axios from "axios";
import qs from 'query-string'

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?: string
    colorId?: string
    sizeId?: string
    isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const queryUrl = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId, 
            sizeId: query.sizeId, 
            categoryId: query.categoryId, 
            isFeatured: query.isFeatured, 
        }
    }) 

    const res = await axios.get(queryUrl)

    return res.data
}

export default getProducts