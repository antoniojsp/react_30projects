import { useState } from "react"
import { Button } from "../ui/button";


export default function DeepClone() {
    const [input, setInput] = useState("");
    const [original, setOriginal] = useState(null);
    const [cloned, setCloned] = useState(null);
    const [error, setError] = useState("");

    const deepClone = (obj) => {
        if (obj === null || typeof obj !== "object") {
            return obj
        }
        const clone = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
            clone[key] = deepClone(obj[key]);
        }
        return clone;
    }

    const handleDeepClone = () => {
        try {
            const parseObj = JSON.parse(input);
            setOriginal(parseObj);
            const cloneObj = deepClone(parseObj);
            setCloned(cloneObj)
            setError("")
        } catch (e) {
            setError("Invalid Object");
            setOriginal(null);
            setCloned(null);
        }
    }

    const handleClear = () => {
        setInput("");
        setOriginal(null);
        setCloned(null)
    }

    return (
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Deep Clone</h1>
            <div className="mt-5">
                <textarea
                    className="w-full p-2 h-32 border border-gray-300 rounded text-sm resize-none"
                    placeholder="Place json here..."
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
                <div className="flex flex-row justify-center items-center gap-x-4">
                    <Button
                        disabled={input.length === 0}
                        onClick={handleDeepClone}
                        className={"mt-6"}>
                        Start Deep Clone
                    </Button>
                    <Button
                        disabled={input.length === 0}
                        className={"mt-6"}
                        onClick={handleClear}
                    > Clear</Button>
                </div>
                <div className="flex flex-col gap-5 mt-10">
                    {
                        error && <h3>Bad object</h3>
                    }
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