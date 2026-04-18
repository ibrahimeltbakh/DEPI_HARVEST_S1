import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./productsFunctions";



export default function useGetProducts() {
    let products = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
        staleTime: 60000
    })
    return products
}