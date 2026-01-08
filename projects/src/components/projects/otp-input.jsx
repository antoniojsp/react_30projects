import { useEffect, useRef, useState } from "react"
import { Input } from "../ui/input";
import { Button } from "../ui/button";


export default function OtpInput() {
    const OTP_LENGTH = 5;
    const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
    const focusRef = useRef([]);
    const password = "12345" // for testing

    useEffect(() => {
        focusRef.current[0].focus();
    }, [])

    const clearInput = () => {
        setOtp(prev =>
            prev.map(digit => "")
        )
    }

    const inputFocus = (index) =>{
        focusRef.current[index].focus();
    }


    const handleOtpChange = (index, value) => {
        const val = parseInt(value);
        if (isNaN(val)) {
            return;
        }
        setOtp(
            (prev) => prev.map(
                (item, i) => i === index ? value : item
            )
        )

        if (value && index < OTP_LENGTH - 1) {
            inputFocus(index + 1);
        }
    }

    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace") {
            if (otp[index] !== "") {
                setOtp(
                    prev => prev.map((val, idx) =>
                        index === idx ? "" : val
                    ))
            }
            if (0 < index) {
                inputFocus(index-1);
            }

        } else if (index === OTP_LENGTH - 1 && event.key === "Enter") {
            verify();
        }
    }

    const verify = () => {
        if (password === otp.join("")) {
            alert("Welcome!")
        } else {
            alert("Access denied!")
            focusRef.current[0].focus()
        }
        clearInput(); //clears the input after a verification attempt
        inputFocus(0);
    }

    const handlePaste = (event) => {
        const password = event.clipboardData.getData("text");

        setOtp(prev =>
            prev.map((elem, index) => password[index])
        )
    }


    return <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
        <h1>OTP input</h1>
        <div className="flex mt-10 mb-5 justify-center gap-2">
            {
                otp.map(
                    (digit, index) => (
                        <Input
                            key={index}
                            type="text"
                            inputMode="Numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(event) => handleOtpChange(index, event.target.value)}
                            className={"w-12 h-12 text-center text-lg "}
                            ref={(elem) => focusRef.current[index] = elem}
                            onKeyDown={(event) => { handleKeyDown(index, event) }}
                            onPaste={(event) => handlePaste(event)}
                        />
                    )
                )}

        </div>
        <Button
            disabled={otp.some((digit) => digit === "")}
            onClick={verify}
        >
            Verify
        </Button>
    </div>
}