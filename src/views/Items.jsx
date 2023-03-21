import { useState } from "react"
import { itemService } from "../services/items-service"

export const Items = () => {
    const [items, setItems] = useState(itemService.loadItems())
    const [openDev, setOpenDev] = useState(false)
    const [itemOpen, setItemOpen] = useState()

    const toggleDev = () => {
        setOpenDev(!openDev)
    }

    const openItem = (itemId) => {
        itemOpen === itemId ? setItemOpen(false) : setItemOpen(itemId)
    }

    if (!items) return <div>Loading</div>
    return (
        <section>
            <h2>פריטים</h2>
            <ul className="items-list">
                {items.map((item) =>
                    <li key={item._id}>
                        <button onClick={()=>openItem(item._id)}>{item.name}</button>
                        {(itemOpen === item._id) && <div>
                            <p>{item["bar-code"]}</p>
                        </div>}
                    </li>
                )}
            </ul>
            <button onClick={toggleDev}>{!openDev ? ' למפתחים' : 'סגור'}</button>
            {openDev && <pre>{JSON.stringify(items, null, 2)}</pre>}
        </section>
    )
}