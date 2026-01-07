import { useState } from "react"
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";


export default function TemperatureConverter() {


    const [celsius, setCelsius] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(32)

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

    const celsiusToF = (value) =>{
        return ((value*9/5)+32).toString()
    }

    const fahrenheitToC = (value) =>{
        return ((value-32)*5/9).toString()
    }

    function handleCToF(value){
        setCelsius(value);
        if(value === ""){
            setFahrenheit("")
        }else{
            const numValue = parseFloat(value);
            if(!isNaN(numValue)){
                const res = celsiusToF(numValue)
                setFahrenheit(res)
            }
        }
    }

    function handleFToC(value){
        setFahrenheit(value);
        if(value === ""){
            setCelsius("")
        }else{
            const numValue = parseFloat(value);
            if(!isNaN(numValue)){
                const res = fahrenheitToC(numValue)
                setCelsius(res)
            }
        }
    }

    console.log(celsius, fahrenheit)

    return <div className="flex flex-col  pt-[150px] justify-center bg-gray-50">
        <h1>Temperature Converter</h1>
        <div className="flex flex-col justify-center items-center gap-5 mt-10">
            <Label>Celsius</Label>
            <Input
                id="celsius"
                type="number"
                value={formatValue(celsius)}
                onChange={(event) => {handleCToF(event.target.value)}}
                placeholder="0"
            />
            <Label>Farenheit</Label>
            <Input
                id="fahrenheit"
                type="number"
                value={formatValue(fahrenheit)}
                onChange={(event) => {handleFToC(event.target.value)}}
                placeholder="32"
            />
        </div>
    </div>
}





