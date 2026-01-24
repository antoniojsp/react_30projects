import { useEffect, useState, useRef } from "react"
import { Button } from "../ui/button";


export default function KeyboardModal() {

    const [open, setOpen] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        if (!open) { // if false, doesn't do anything
            return;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        }

        // if true, add a listener and check for mousedown, if detected, trigger the handle
        // which check if evemt was dont inside or outside the dropdown
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [open]);

    const handleConfirm = () => {
        alert("Done!");
        setOpen(false);
    }

    return <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
        <h1>Keyboard Modal</h1>
        <div className="mt-10">
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            {
                open && (
                    <>
                        <div className="fixed inset-0 bg-black/50 z-50"  />
                        <div ref={modalRef}
                             className="fixed top-1/2 left-1/2 z-50 w-full max-w-md bg-white rounded 
                                    shadow-lg p-6 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="flex flex-col gap-3 mb-4">
                                <h3>Modal Title</h3>
                                <p>Modal Body</p>
                            </div>
                            <div className="flex justify-center gap-6">
                                <Button onClick={() => setOpen(false)}>Cancel</Button>
                                <Button onClick={handleConfirm}>Confirm</Button>
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    </div>
}