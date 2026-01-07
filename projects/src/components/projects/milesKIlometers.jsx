import { useState } from "react"
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";


export default function MilesToKilometers() {
    const [miles, setMiles] = useState(0)
    const [kilometers, setKilometers] = useState(0)

    const formatValue = (value) => {
        if (value === "") {
            return ""
        }

        const numValue = parseFloat(value);
        if (isNaN(numValue)) {
            return value
        }

        if (Number.isInteger(numValue)) {
            return numValue.toString();
        }

        return numValue.toFixed(2);
    }

    const milesToKm = (value) =>{
        return (value*1.60934).toString();
    }

    const kmToMiles = (value) =>{
        return (value*0.62137).toString();
    }

    function handleMilesToKilometers(value){
        setMiles(value);
        if(value === ""){
            setKilometers("");
        }else{
            const numValue = parseFloat(value);
            if(!isNaN(numValue)){
                const res = milesToKm(numValue);
                setKilometers(res);
            }
        }
    }
    console.log(kilometers, miles)
    const handleKilometersToMiles = (value) =>{
        setKilometers(value);
        if(value === ""){
            setMiles("");
        }else{
            const numValue = parseFloat(value);
            if(!isNaN(numValue)){
                const res = kmToMiles(numValue);
                setMiles(res);
            }
        }
    }




    return <div className="flex flex-col  pt-[150px] justify-center bg-gray-50">
        <h1>Distance Converter</h1>
        <div className="flex flex-col justify-center items-center gap-5 mt-10">
            <Label>Miles</Label>
            <Input
                id="miles"
                type="number"
                value={formatValue(miles)}
                onChange={(event) => {handleMilesToKilometers(event.target.value)}}
                placeholder="0"
            />
            <Label>Kilometers</Label>
            <Input
                id="kilometers"
                type="number"
                value={formatValue(kilometers)}
                onChange={(event) => {handleKilometersToMiles(event.target.value)}}
                placeholder="0"
            />
        </div>
    </div>
}

