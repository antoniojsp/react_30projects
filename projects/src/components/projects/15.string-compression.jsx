import { CircleArrowOutDownLeft } from "lucide-react";
import { useState } from "react"

export default function StringCompression(){
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const compressString = (word) =>{
        let compressed = "";
        let count = 1;
        for (let i = 1; i <= word.length; i++){
            if(word[i-1] === word[i]){
                count++;
            }else{
                compressed+=word[i-1]+count;
                count=1;
            }
        }
        return compressed;
    }

    const handleCompression = (event) =>{
        const value = event.target.value;
        setInput(value);
        const compressed = compressString(value);
        setResult(compressed);
    }

    return(
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>String Compression</h1>
            <div className="mt-5">
                <textarea 
                    onChange={handleCompression}
                    value={input}
                    className="w-full h-64 p-3 border border-gray-300 rounded text-sm resize-none mb-11"
                    placeholder="Enter the string..."
                />
            </div>
            <div className="mt-2">
                <p className="p-3 bg-gray-100 rounded">{result || "Compresion preview will appear here"}</p>
            </div>
        
        </div>
    )
}