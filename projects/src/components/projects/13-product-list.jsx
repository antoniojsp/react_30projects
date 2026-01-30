import { useProducts, ProductContext } from "@/context/product-context";
import { useContext } from "react";
import { Card, CardTitle } from "../ui/card";
export default function ProductList() {
    // const {loading, productList} = useProducts();
    console.log(ProductContext)
    const { loading, productList } = useContext(ProductContext);

    console.log(productList)
    return (
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Product Listing (Context API)</h1>
            <div className="mt-6">

                {
                    loading ? <p className="text-gray-700">Loading</p> :
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {
                                productList.map(prod => (<Card className={"p-5 rounded-2xl shadow-md"}>
                                    <img
                                        src={prod.thumbnail}
                                        className="w-full h-40 object-cover rouded=-lg mb-4"
                                    />
                                    <CardTitle className={"text-lg font-semibold mb-1"}>
                                        {prod.title}
                                    </CardTitle>
                                </Card>))
                            }
                        </div>
                }

            </div>

        </div>
    )
}