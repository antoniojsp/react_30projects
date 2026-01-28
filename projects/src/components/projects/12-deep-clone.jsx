import { useState } from "react"
import { Button } from "../ui/button";


export default function DeepClone(){

    const [input, setInput] = useState("");
    const [original, setOriginal] = useState(null);
    const [cloned, setCloned] = useState(null);

    const deepClone = (obj) =>{
        if(obj === null || typeof obj !== "object"){
            return obj
        }
        const clone = Array.isArray(obj) ? []:{};
        for(const key in obj){
            clone[key] = deepClone(obj[key]);
        }
        return clone;
    }

    const handleDeepClone = () =>{
        try{
            const parseObj = JSON.parse(input);
            setOriginal(parseObj);
            const cloneObj = deepClone(parseObj);
            setCloned(cloneObj)
            console.log(cloneObj)
        }catch(e){
            console.log(e);
        }
    }

    return(
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Deep Clone</h1>
            <div className="mt-5">
                <textarea
                    className="w-full p-2 h-32 border border-gray-300 rounded text-sm resize-none"
                    placeholder="Place json here..."
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
                <Button onClick={handleDeepClone} className={"mt-6"}>Start Deep Clone</Button>
                    <div className="flex flex-col gap-5">
                        <div>
                        {
                            original && (
                                <div>
                                        <h3>Original Object</h3>
                                        <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm">
                                            {JSON.stringify(original, null, 2)}
                                        </pre>
                                </div>
                            )
                        }
                        </div>
                        {
                            cloned && (
                                <div>
                                        <h3>Cloned Object</h3>
                                        <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm">
                                            {JSON.stringify(cloned, null, 2)}
                                        </pre>
                                </div>
                            )
                        }
                </div>
            </div>
        </div>
    )
}