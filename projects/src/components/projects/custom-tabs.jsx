import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "../ui/card";


export default function CustomTabs() {

    const tabs = [
        {
            id: "tab1",
            title: "Dashboard",
            content: "Admin Dashboard"

        },
        {
            id: "tab2",
            title: "Products",
            content: "Admin Products"

        },
        {
            id: "tab2=3",
            title: "Settings",
            content: "Admin Settings"

        },
    ]

    const [activeTab, setActiveTab] = useState(0);
    const tabListRef = useRef(null);
    const handleTabs = (index) => {
        setActiveTab(index);
    }

    const handleOnKeyDown = (event) => {
        const key = event.key;
        event.preventDefault();
        if (key === "ArrowRight") {
            setActiveTab(prev => {
                if (activeTab < tabs.length - 1) {
                    return prev + 1
                } else {
                    return prev
                }
            })
        } else if (key === "ArrowLeft") {
            setActiveTab(prev => {
                if (0 < activeTab) {
                    return prev - 1
                } else {
                    return prev
                }
            })
        }
    }

    useEffect(() => {
        const tabButtons = tabListRef.current ? Array.from(tabListRef.current?.querySelectorAll('[role="tab"]')) : [];
        if (tabButtons && tabButtons[activeTab]) {
            tabButtons[activeTab].focus();
        }
    }, [activeTab])

    return <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
        <h1>Custom Tabs With Keyboard Interactions</h1>
        <Card className={"w-full max-w-2xl max-auto"}>
            <CardContent className={"p-6"}>
                <div
                    ref={tabListRef}
                    role="tablist"
                    aria-orientation="horizontal"
                    className="flex border-b"
                    onKeyDown={handleOnKeyDown}
                >

                    {
                        tabs.map((currentTabItem, index) =>
                        (
                            <button
                                key={currentTabItem.id}
                                role={"tab"}
                                id={`tab-${currentTabItem.id}`}
                                aria-selected={activeTab === index}
                                aria-controls={`panel-${currentTabItem.id}`}
                                tabIndex={activeTab === index ? 0 : -1}
                                className={`px-4 py-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                                ${activeTab === index
                                        ? "border-b-2 border-blue-900 text-blue-500"
                                        : "text-gray-500"
                                    }`}
                                onClick={() => handleTabs(index)}>
                                {currentTabItem.title}
                            </button>
                        )
                        )
                    }
                </div>
                <div className="mt-5">
                    {
                        tabs.map(
                            (currentTabItem, index) =>
                                <div
                                    key={currentTabItem.id}
                                    role={"tabpanel"}
                                    id={`tab-${currentTabItem.id}`}
                                    aria-labelledby={`tab-${currentTabItem.id}`}
                                    className={`p-5 bg-gray-100  rounded-md w-full ${activeTab === index ? "block" : "hidden"}`}
                                >
                                    {currentTabItem.content}
                                </div>
                        )
                    }
                </div>
            </CardContent>

        </Card>
    </div>
}