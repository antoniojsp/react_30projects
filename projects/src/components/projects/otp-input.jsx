import { useState } from "react"
import { Input } from "../ui/input";
import { Button } from "../ui/button";


export default function OtpInput() {
    const OTP_LENGTH = 4;
    const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));

    const handleOtpChange = (index, value) =>{
        console.log(typeof value);
        const val = parseInt(value);
        if(isNaN(val)){
            return;
        }

        setOtp(
            (prev) => prev.map(
                (item, i) => i === index ? value:item
            ) 
        )
    } 

    console.log(otp)
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
                            className={"w-12 h12 text-center text-lg"}
                            autoFocus={index === 0}
                        />
                    )
                )}

        </div>
        <Button
            disabled={otp.some((digit) => digit === "")}
        >
            Verify
        </Button>
    </div>
}