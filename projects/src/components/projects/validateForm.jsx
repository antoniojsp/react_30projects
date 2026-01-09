import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react"
import { Input } from "../ui/input";
import { Button } from "../ui/button";


export default function ValidateForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        age: ''
    })

    const [errors, setErrors] = useState({ name: "", email: "", age: "" });
    const [submitted, setSubmitted] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true)


    useEffect(() => {
        setIsDisabled(!isReadyToSubmit());
    }, [form])

    const isReadyToSubmit = () => {
        const valid = validate();
        if (Object.keys(valid).length > 0) {
            return false
        }

        if (Object.values(form).some(val => val.trim() === "")) {
            return false
        }

        if (Object.values(errors).some(val => val !== "")) {
            return false
        }
        return true
    }

    const checkName = () =>{
        let name = "";
        if (!/^[a-zA-Z\s]+$/.test(form.name)) {
            name = "Name is required to be only letters"
        } else if (form.name.length < 3) {
            name = "Name must be at least 3 characters long"
        }
        setErrors(prev => ({...prev, [name]:name}))
    }

    const handleOnChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        console.log(name, value)
        setForm(prev => {
            const temp = { ...prev }
            temp[name] = value;
            return temp;
        })
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }))
    }

    
    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
            newErrors.name = "Name is required to be only letters"
        } else if (form.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters long"
        }

        if (form.email.trim().length === 0) {
            newErrors.email = "Email is required."
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            newErrors.email = "Wrong Format"
        }

        const age = form.age.trim();
        if (!/\d+$/.test(age)) {
            newErrors.age = "Invalid age."
        } else {
            const parseAge = parseInt(age)
            if (0 > parseAge || parseAge > 150) {
                newErrors.age = "Age in wrong range."
            }
        }

        return newErrors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const valid = validate();
        if (Object.keys(valid).length > 0) {
            setErrors(valid)
        } else {
            setErrors({})
            setSubmitted(true)
            setTimeout(() => {
                setErrors({});
                setSubmitted(false)
                setForm({
                    name: '',
                    email: '',
                    age: ''
                })
            }, 5000);
        }
    }

    return <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
        <h1 className="flex flex-col mb-10">Validate Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">

            <div className="flex flex-col gap-3">
                <Label>Name</Label>
                <Input
                    name="name"
                    placeholder="Enter you name. "
                    type="text"
                    value={form.name}
                    onChange={(event) => { handleOnChange(event) }}
                    onBlur={() => {checkName()}}
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
                    value={form.email}
                    placeholder='Enter your email.'
                    type="text"
                    onChange={(event) => { handleOnChange(event) }}
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
                    name="age"
                    value={form.age}
                    placeholder="Introduce your age."
                    onChange={(event) => { handleOnChange(event) }}
                    className={
                        "w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    }
                />
                {
                    errors.age && <p className="text-sm text-red-700 mt-2">{errors.age}</p>
                }
            </div>
            <Button
                disabled={isDisabled}
                type="submit"
                className={'mt-5'}
            >
                Submit
            </Button>
        </form>
        <div>
            {
                submitted ? <div className="mt-10 p-6 bg-green-100 rounded text-green-700 text-sm">
                    Form submitted successfully!
                </div> : null
            }
        </div>
    </div>
}