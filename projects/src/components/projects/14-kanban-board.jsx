import { useEffect, useState } from "react"

export default function KanbanBoard() {

    const [columns, setColumns] = useState(
        {
            todo: ["Todo 1", "Todo 2"],
            inProgress: ["progress"],
            done: ["Completed"]
        }
    )

    const [dragging, setDragging] = useState(null);

    const onDragStart = (currTask, currColumnId) => {
        setDragging({ currTask, currColumnId })
    }

    const onDrop = (event, target) => {
        if (!target || dragging.currColumnId === target) {
            return;
        }

        event.currentTarget.classList.remove("bg-blue-100");
        setColumns(prev =>  ({
                ...prev,
                [dragging.currColumnId]: prev[dragging.currColumnId].filter(item => item !== dragging.currTask),
                [target]: [...prev[target], dragging.currTask]
            })
        )
    }

    const onDragOver = (event) => {
        event.preventDefault()
        event.currentTarget.classList.add("bg-blue-100"); 
    }
    
    const onDragLeave = (event) => {
        event.currentTarget.classList.remove("bg-blue-100");
    }

    return (
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Kanban Board</h1>
            <div className="mt-5 grid grid-cols-3 gap-4">
                {
                    Object.entries(columns).map(([columnId, tasks]) => (
                        <div
                            key={columnId}
                            className="rounded-md border p-2"
                            onDragOver={onDragOver}
                            onDragLeave={onDragLeave}
                            onDrop={(event) => onDrop(event, columnId)}
                        >
                            <h3 className="font-bold capitalize mb-2">{columnId}</h3>
                            {
                                tasks.map(task => (
                                    <div
                                        key={task}
                                        className="bg-gray-200 p-2 mb-2 rounded cursor-move"
                                        draggable
                                        onDragStart={() => onDragStart(task, columnId)}
                                    >{task}</div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}