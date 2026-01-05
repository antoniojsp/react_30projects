import { useEffect, useRef, useState } from "react"
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";


export default function ClickOutsideDropDown() {

    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef(null);

    const toggle = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(
        () => {
            if(!isOpen){ // if false, doesn't do anything
                return; 
            }
            // if true, add a listener and check for mousedown, if detected, trigger the handle
            // which check if evemt was dont inside or outside the dropdown
            const handleClickOutside = (event) => {
                console.log(event.target, dropDownRef.current)
                if(dropDownRef.current && !dropDownRef.current.contains(event.target)){
                    setIsOpen(false);
                }
            }   

            document.addEventListener("mousedown", handleClickOutside)

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }

        }, [isOpen] // check for true or false
    )

    return <div>
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Close Dropdown On Outside Click</h1>
            <div className="relative mt-6" ref={dropDownRef}>
                <Button onClick={toggle} variant="secondary" className={"w-full justify-between"}>
                    Select an Option
                    <ChevronDown
                        className={`ml-2 h-4 w-4 ${isOpen ? "rotate-180" : ""}`}
                    >
                    </ChevronDown>
                </Button>
                {
                    isOpen && (
                        <div className="absolute mt-2 w-full rounded-md border bg-background z-10 shadow-lg">
                            <div className="py-1">
                                {
                                    ["Option 1", "Option 2", "Option 3"].map(
                                        (option, index) => <button key={index} className="block w-full px-4 py-2 text-left 
                                                                                          text-sm hover:bg-muted">
                                                                                            {option}
                                                                                          </button>  
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
}