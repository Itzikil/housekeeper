import { useEffect, useState } from "react"
import { i18Service } from "../services/i18n-service"
import { itemService } from "../services/items-service"

export const Items = () => {
    useEffect(() => {
        translate()
    }, [])

    const translate = () => {
        i18Service.doTrans()
    }

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
            <h2 data-trans="items">items</h2>
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