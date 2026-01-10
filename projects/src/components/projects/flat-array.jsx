import { useEffect, useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";


export default function FlattedArray() {

    const categoryTree = [
        {
            id: "electronics",
            name: "Electronics",
            children: [
                {
                    id: "computers",
                    name: "Computers",
                    children: [
                        { id: "laptops", name: "Laptops" },
                        { id: "desktops", name: "Desktops" },
                        {
                            id: "components",
                            name: "Components",
                            children: [
                                { id: "processors", name: "Processors" },
                                { id: "graphics-cards", name: "Graphics Cards" },
                                { id: "memory", name: "Memory" },
                            ],
                        },
                    ],
                },
                {
                    id: "phones",
                    name: "Phones & Tablets",
                    children: [
                        { id: "smartphones", name: "Smartphones" },
                        { id: "tablets", name: "Tablets" },
                       
                    ],
                },
            ],
        },
        {
            id: "clothing",
            name: "Clothing",
            children: [
                { id: "mens", name: "Men's Clothing" },
                { id: "womens", name: "Women's Clothing" },
                {
                    id: "accessories",
                    name: "Accessories",
                    children: [
                        { id: "watches", name: "Watches" },
                        { id: "bags", name: "Bags" },
                        { id: "jewelry", name: "Jewelry" },
                    ],
                },
            ],
        },
    ];

    const [flatCategories, setFlatCategories] = useState([]);
    const [selectedCategory, setSelectedCategories] = useState("");

    const flatArray = (object) =>{
        const result = [];
        const processCategory = (singleCategory) =>{
            const {children, ...everythingElse} = singleCategory;
            result.push(everythingElse)
            if(children && children.length > 0){
                for(const node of children){
                    processCategory(node)
                }
            }
        }
        for(const category of object){
            processCategory(category)
        }

        return result;
    }

    useEffect(()=>{
        const result = flatArray(categoryTree)
        setFlatCategories(result)
    }, [])

    console.log(selectedCategory)

    return <div className="flex flex-col pt-[150px] justify-center bg-gray-50">

        <Select value={selectedCategory} onValueChange={(value)=>setSelectedCategories(value)}>
            <SelectTrigger>
                <SelectValue placeholder="Select category"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                {
                    flatCategories.map((cat, index) =>
                         <SelectItem key={index} value={cat.name}>
                            {cat.name}
                         </SelectItem>)
                }
            </SelectContent>
        </Select>
        {
            selectedCategory
        }


    </div>

}