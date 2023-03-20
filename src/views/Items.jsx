import { useState } from "react"
import { itemService } from "../services/items-service"

export const Items = () => {
    const [items, setItems] = useState(itemService.loadItems())
    const [openDev, setOpenDev] = useState(false)

    const toggleDev = () => {
        setOpenDev(!openDev)
    }

    if (!items) return <div>Loading</div>
    return (
        <section>
            <h1>פריטים</h1>
            <ul className="items-list">
                {items.map((item) =>
                    <li key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item["bar-code"]}</p>
                    </li>
                )}
            </ul>
            <button onClick={toggleDev}>{!openDev ?' למפתחים' : 'סגור'}</button>
            {openDev && <pre>{JSON.stringify(items, null, 2)}</pre>}
        </section>
    )
}