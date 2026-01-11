
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function FlattenObjectInspector(){
    const [input, setInput] = useState("");
    const [flatten, setFlatten] = useState(null);

    const flattenObject = (obj, parentKey="", result={}) =>{
        for (let key in obj){
            const path = parentKey ? `${parentKey}.${key}` : key;
            if(typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])){
                flattenObject(obj[key], path, result);
            }else{
                result[path] = obj[key];
            }   
        }
        return result;
    }

    const handleParse = () => {
        try{
            const parsedresult = JSON.parse(input);
            const flatRes = flattenObject(parsedresult);
            setFlatten(flatRes)
        }catch(e){
            console.log(e)
        }
    }

    return <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
        <h1>Flatten Object Inspector</h1>
        <div className="grid gri-cols-2 gap- mt-11">
            <div>
                <textarea
                    className="w-full h-64 p-3 border border-gray-300 rounded text-sm resize-none mb-11"
                    placeholder="Enter your Json Here"
                    value={input}
                    onChange={(event => setInput(event.target.value))}
                />
                <Button onClick={handleParse}>Flatten</Button>
            </div>
        </div>
        <div>
            {
                flatten && <div className="border border-gray-300 rounded overflow-x-auto mt-10">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left p-2 border-b">Key</th>
                                <th className="text-left p-2 border-b">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              Object.entries(flatten).map(([key, value], index) =>(
                                <tr key={index} className={index % 2 == 0? "bg-gray-300":"white"}>
                                    <td className="p-2 border-b">{key}</td>
                                    <td className="p-2 border-b">{String(value)}</td>
                                </tr>
                              ))
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>


    </div>
}