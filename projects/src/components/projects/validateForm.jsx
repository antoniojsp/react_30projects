import { Label } from "@radix-ui/react-label";
import { useState } from "react"
import { Input } from "../ui/input";
import { Button } from "../ui/button";


export default function ValidateForm(){

    const [form, setForm] = useState({
        name:'',
        email: '',
        age: ''
    })

    const [errors, setErrors]  = useState({name:"false", email:"false", age:"false"});
    const [submitted, setSubmitted] = useState(false);

    const handleOnChange = (val) =>{
        console.log(val)
    }

    return <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
        <h1>Validate Form</h1>
        <form className="space-y-4">
            <div className="flex flex-col gap-3">
                <Label>Name</Label>
                <Input
                    name="name"
                    value={form.name}
                    onChange={(event) => {handleOnChange(event.target.value)}}
                    className={
                        "w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    }
                />
                {
                    errors.name && <p className="text-sm text-red-700 mt-2">{errors.name}</p>
                }
            </div>

            <div className="flex flex-col gap-3">
                <Label>Name</Label>
                <Input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(event) => {handleOnChange(event.target.value)}}
                    className={
                        "w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    }
                />
                {
                    errors.name && <p className="text-sm text-red-700 mt-2">{errors.name}</p>
                }
            </div>

            <div className="flex flex-col gap-3">
                <Label>Email</Label>
                <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(event) => {handleOnChange(event.target.value)}}
                    className={
                        "w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    }
                />
                {
                    errors.email && <p className="text-sm text-red-700 mt-2">{errors.email}</p>
                }
            </div>

            <div className="flex flex-col gap-3">
                <Label>Age</Label>
                <Input
                    name="name"
                    value={form.age}
                    onChange={(event) => {handleOnChange(event.target.value)}}
                    className={
                        "w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    }
                />
                {
                    errors.age && <p className="text-sm text-red-700 mt-2">{errors.age}</p>
                }
            </div>
            <Button type="submit" className={'mt-5'}>Submit</Button>
        </form>

    </div>
}