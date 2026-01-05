import { useState } from "react"
import { Button } from "../ui/button";
import { Minus, Plus, Redo2, Undo2 } from "lucide-react";

export default function Counter() {
    const [state, setState] = useState({ history: [0], position: 0 })
    const currentValue = state.history[state.position];

    const addValueToHistory = (newValue) => {
        // ad values to history, when it increments or decrements
        setState(prev => {
            const truncated = prev.history.slice(0, prev.position + 1);
            const newHistory = [...truncated, newValue]
            return { history: newHistory, position: newHistory.length - 1 }
        })
    }

    const decrement = () => addValueToHistory(currentValue - 1)
    const increment = () => addValueToHistory(currentValue + 1)

    // there is no real need to check if position is in boundaries since the buttons disable if position out of boundaries 
    function undo() {
        if (state.position > 0) {
            setState(prev => {
                return { history: prev.history, position: prev.position - 1 }
            })
        }
    };

    function redo() {
        if (state.position < state.history.length - 1) {
            setState(prev => {
                return { history: prev.history, position: prev.position + 1 }
            })
        }
    };

    return <div className="flex flex-col pt-[50px] justify-center bg-gray-300
                            border  p-10 rounded-lg">
        <h1>Counter with Undo/Redo</h1>
        <div className="flex flex-col mt-5 justify-center gap-4">
            <div className="flex justify-center items-center">
                <div className="text-7xl font-bold tabular-nums">{currentValue}</div>
            </div>
            <div className="flex gap-2 justify-center items-center">
                <Button onClick={decrement}>
                    <Minus className="h-4 w-4" />
                </Button>
                <Button onClick={increment}>
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <div className="flex gap-2 justify-center items-center">
                <Button disabled={state.position === 0} onClick={undo} variant="secondary">
                    Undo <Undo2 className="h-4 w-4" />
                </Button>
                <div className="text-sm text-muted-foreground">
                    {state.position + 1} / {state.history.length}
                </div>
                <Button disabled={state.position === state.history.length - 1} onClick={redo} variant={"secondary"}>
                    Redo <Redo2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    </div>
}