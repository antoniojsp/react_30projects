import { useEffect, useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import { categoryTree } from "./data";

export default function FlattedArray() {
    const [flatCategories, setFlatCategories] = useState([]);
    const [selectedCategory, setSelectedCategories] = useState("");

    const flatArray = (object) => {
        const result = [];
        const processCategory = (singleCategory) => {
            const { children, ...everythingElse } = singleCategory;
            result.push(everythingElse)
            if (children && children.length > 0) {
                for (const node of children) {
                    processCategory(node)
                }
            }
        }
        for (const category of object) {
            processCategory(category)
        }
        return result;
    }

    useEffect(() => {
        const result = flatArray(categoryTree)
        setFlatCategories(result)
    }, [])


    return <div className="flex flex-col pt-[150px] justify-center bg-gray-50">

        <Select value={selectedCategory} onValueChange={(value) => setSelectedCategories(value)}>
            <SelectTrigger>
                <SelectValue placeholder="Select category" />
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
            <h1 className="flex flex-col mt-20]  ">{selectedCategory}</h1>
        }


    </div>

}