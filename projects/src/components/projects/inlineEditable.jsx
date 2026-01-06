import { Pencil } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Input } from "../ui/input";


export default function InlineEditable() {
    const [items, setItems] = useState(
        [
            {
                id: 1, text: "Hello"
            },
            {
                id: 2, text: "Antonio"
            },
            {
                id: 3, text: "Silva"
            }
        ]
    )

    const [currentEditedID, setCurrentEditedID] = useState(null);
    const [currentEditedValue, setCurrentEditedValue] = useState("");
    const inputRef = useRef(null);

    const handleEdit = (id, text) => {
        setCurrentEditedID(id);
        setCurrentEditedValue(text);
    }

    const handleBlur = (event) => {
        if (currentEditedID !== null) {
            saveChanges();
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            saveChanges();
        } else if (event.key === "Escape") {
            setCurrentEditedID(null);
            setCurrentEditedValue("")
        }
    }

    const saveChanges = () => {
        if (currentEditedID !== null) {

            const currentValue = items.find(elem => elem.id === currentEditedID)?.text
            if(currentValue === currentEditedValue){
                setCurrentEditedID(null);
                setCurrentEditedValue("")
                return
            }

            setItems(prev =>
                prev.map(item => item.id === currentEditedID ? { ...item, text: currentEditedValue.trim() } : item)
            )
            setCurrentEditedID(null)
            setCurrentEditedValue("")
        }
    }

    useEffect(
        () => {
            if (currentEditedID !== null && inputRef.current) {
                inputRef.current.focus();
            }
        }, [currentEditedID]
    )


    return <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
        <h1> Inline Editable Input</h1>
        <div className="mt-10 flex flex-col gap-4">
            {
                items.map((item) => (
                    currentEditedID === item.id ? <Input
                        key={item.id}
                        ref={inputRef}
                        value={currentEditedValue}
                        onChange={(event) => { setCurrentEditedValue(event.target.value) }}
                        className={"w-full"}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                    />
                        :
                        <div 
                            key={item.id}
                            className="flex p-4 bg-muted-foreground justify-between items-center cursor-pointer group rounded" >
                            <span className="text-white ml-5">{item.text}</span>
                            <Pencil onClick={() => handleEdit(item.id, item.text)} 
                                    className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                ))
            }
        </div>
    </div>
}

