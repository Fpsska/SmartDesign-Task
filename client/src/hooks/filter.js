import { useState } from "react";
import { useDebouce } from "./debounce";

export function useFilter(items, filterProp) {
    const [enteredSearchValue, setEnteredSearchValue] = useState("")
    const currentSearchValue = useDebouce(enteredSearchValue, 200)

    const sortedItems = currentSearchValue
        ? items.filter((item) =>
            RegExp(currentSearchValue, "i").test(item[filterProp])
        )
        : items

    return {
        enteredSearchValue,
        setEnteredSearchValue,
        sortedItems
    }
}