import { useEffect, useState } from "react"
import { i18Service } from "../services/i18n-service"
import { itemService } from "../services/items-service"

export const Items = () => {

    const [openDev, setOpenDev] = useState(false)
    const [itemOpen, setItemOpen] = useState()
    const [items, setItems] = useState(itemService.loadItems())

    const [depratmentOpen, setDepratmentOpen] = useState()
    const [departments, setDepartments] = useState(itemService.getDepartments())

    useEffect(() => {
        translate()
    }, [itemOpen])

    const openDepartment = (department) => {
        if (depratmentOpen === department) setDepratmentOpen(false)
        else {
            setItems(itemService.getItemByDepartment(department))
            setDepratmentOpen(department)
        }
    }

    const translate = () => {
        i18Service.doTrans()
    }
    const toggleDev = () => {
        setOpenDev(!openDev)
    }

    const openItem = (itemId) => {
        itemOpen === itemId ? setItemOpen(false) : setItemOpen(itemId)
    }

    const onChangeFilter = ({ target }) => {
        let value = target.value
        setItems(itemService.loadItems(value))
    }

    if (!items) return <div>Loading</div>
    return (
        <section>
            <h2 data-trans="items">items</h2>
            <input type="text" onChange={onChangeFilter} className="input"/>
            {
                <ul className="items-list">
                    {departments.map((department) =>
                        <li key={department}>
                            <button onClick={() => openDepartment(department)}>{department}</button>
                            <ul className="items-list">
                                {(depratmentOpen === department) && items.map((item) =>
                                    <li key={item._id}>
                                        <button onClick={() => openItem(item._id)}>{item.name}</button>
                                        {(itemOpen === item._id) && <div>
                                            {/* <p>{item["bar-code"]}</p>
                                            <p>{item["department"]}</p> */}
                                            <p><span data-trans="Department"> Department</span>: <span data-trans={item["department-name"]} className="bold">
                                                {item["department-name"]}</span></p>
                                            <p>Department Number: <span className="bold"> {item["department"]} </span></p>
                                        </div>}
                                    </li>
                                )}
                            </ul>
                        </li>
                    )}
                </ul>
            }
            <button onClick={toggleDev}>{!openDev ? ' למפתחים' : 'סגור'}</button>
            {openDev && <pre>{JSON.stringify(items, null, 2)}</pre>}
        </section>
    )
}