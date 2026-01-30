import { createContext, useContext, useState, useEffect } from "react"

export const ProductContext = createContext(null);

export const useProducts = () => useContext(ProductContext)

export default function ProductProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [productList, setProductList] = useState([])

    async function fetchData() {
        setLoading(true)
        try {
            const data = await fetch('https://dummyjson.com/products')
            const result = await data.json()
            if (result?.products) {
                setProductList(result?.products)
            }
        } catch (e) {
            console.log(e)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <ProductContext.Provider value={{ loading, productList }}>
            {children}
        </ProductContext.Provider>
    )
}