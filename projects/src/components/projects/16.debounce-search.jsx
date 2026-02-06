import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useEffect, useRef, useState } from "react";

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceDelay] = useState(value);
    const handler = useRef();

    useEffect(() => {
        if (handler.current) {
            clearTimeout(handler.current)
        }

        handler.current = setTimeout(() => {
            setDebounceDelay(value)
        }, delay)

        return () => clearTimeout(handler.current)
    }, [value, delay])
    return debounceValue
}

export default function DebounceSearchWithApiCall() {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const debounceTerm = useDebounce(searchTerm, 500)

    async function fetchData() {
        setIsLoading(true)
        try {
            const data = await fetch(`https://dummyjson.com/products/search?q=${debounceTerm}`)
            const result = await data.json()
            if (result?.products) {
                setResults(result?.products)
                console.log(result)
            }else{
                setResults([]);
            }
        } catch (e) {
            console.log(e)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if(!debounceTerm.trim()){
            setResults([]);
            return;
        }
        fetchData(debounceTerm);

    }, [debounceTerm])
    // console.log(searchTerm)
// console.log(debounceTerm)
    return (
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Debouce Search With API Call</h1>
            <div className="mt-5">
                <Card className={"w-full max-w-md mx-auto"}>
                    <CardHeader>
                        <CardTitle>
                            Product Title
                        </CardTitle>
                    </CardHeader>
                    <CardContent className={"space-y-4"}>
                        <input
                            placeholder="Search For Products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {
                            isLoading && <div className="flex justify-center py-5">
                                <Loader2 className="h-6 w-6 animate-spin text-gray-600" />
                            </div>
                        }
                        {
                            !isLoading && results && results.length > 0  && 
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">
                                    {results?.length} Results
                                </p>
                                <ul className="space-y-3">
                                    {
                                        results?.map(p=>(
                                            <li key={p.id} className="border p-3 rounded-md">
                                                <div className="font-medium">
                                                    {p.title}
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        }
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}